import Ember from 'ember';
import config from '../config/environment';

const { isPresent, Service, inject: { service }, computed } = Ember;

export default Service.extend({
  cable: service(),
  session: service(),
  store: service(),

  _consumers: {},

  sockets: computed('session.data.authenticated.access_token', function () {
    let accessToken = this.get('session.data.authenticated.access_token');

    if (!isPresent(accessToken)) {
      return [];
    }

    return config.sockets.map((socket) => {
      let host = `${socket.host}?access_token=${accessToken}`;
      return Object.assign({}, socket, { host });
    });
  }),

  consumers: computed('sockets', function() {
    let sockets = this.get('sockets');
    let reducer = (memo, socket) => {
      let { name } = socket;
      let consumer = this.consume(socket);

      return Object.assign({}, memo, {[name]: consumer});
    };
    return sockets.reduce(reducer, {});
  }),

  consume(socket) {
    let { name, host } = socket;
    let consumers = this.get('_consumers');
    let consumer;

    if ('name' in consumers) {
      consumer = consumers[name];
    }
    else {
      consumer = this.get('cable').createConsumer(host);
    }

    if (!consumer.get('connection.isOpen')) {
      consumer.connection.reopen();
    }

    return consumer;
  },

  createResourceSubscriber() {
    return {
      connected: () => {
        Ember.debug( "connected -> " + Ember.inspect('connected to API websocket') );
      },
      received: message => {
        Ember.debug( "received(message) -> " + Ember.inspect(message) );

        if (message.action === 'create' || message.action === 'update') {
          this.get('store').pushPayload(message.payload);
        } else if (message.action === 'destroy') {
          let record = this.get('store').peekRecord(message.type, message.id);
          if (record) {
            record.unloadRecord();
          }
        }
      },
      disconnected: () => {
        Ember.debug("GoalChannel#disconnected");
      }
    };
  },

  createGitterSubscriber() {
    return {
      connected: () => {
        Ember.debug( "connected -> " + Ember.inspect('connected to Gitter websocket') );
      },
      received: message => {
        Ember.debug( "received(message) -> " + Ember.inspect(message) );
        let store = this.get('store');

        if (message.operation === 'create' && message.model.text !== '') {
          let record = store.createRecord('chat-message', message.model);

          if (message.model.room) {
            let roomId = message.model.room.id;
            let room = store.peekRecord('chat-room', roomId);

            if (!room) {
              room = store.createRecord('chat-room', message.model.room);
            }
            else {
              room.setProperties(message.model.room);
            }

            record.set('room', room);
          }

        } else if (message.operation === 'update') {
          let record = store.peekRecord('chat-message', message.model.id);
          if (record && message.model.text === '') {
            record.unloadRecord();
          }
          else {
            record.setProperties(message.model);
          }

        } else if (message.operation === 'destroy') {
        }
      },
      disconnected: () => {
        Ember.debug("Gitter#disconnected");
      }
    };
  },

  subscribe(name, channel, subscriber) {
    let consumers = this.get('consumers');
    let consumer = consumers[name];

    if (!isPresent(consumer)) {
      return;
    }

    return consumer.get('subscriptions').create(channel, subscriber);
  }
});
