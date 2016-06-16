import Ember from 'ember';
import config from '../config/environment';

const { isPresent, Service, inject: { service }, computed } = Ember;

export default Service.extend({
  cable: service(),
  session: service(),
  store: service(),

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
    return sockets.map(this.consume.bind(this));
  }),

  consume(socket) {
    debugger;
    let { name, host } = socket;
    let consumers = this.get('_consumers');
    let consumer = consumers[name];

    if (isPresent(consumer)) {
      consumer.set('url', url);
      consumer.connection.reopen();
    } else {
      consumer = this.get('cable').createConsumer(url);
      consumers[name] = consumer;
      this.set('_consumers', consumers);
    }

    return consumer;
  },

  createResourceSubscriber() {
    return {
      connected: () => {
        Ember.debug( "connected -> " + Ember.inspect('connected to websocket') );
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

  subscribe(name, channel, subscriber) {
    let consumers = this.get('consumers');
    let consumer = consumers[name];
    if (!isPresent(consumer)) {
      return;
    }

    return consumer.get('subscriptions').create(channel, subscriber);
  }
});
