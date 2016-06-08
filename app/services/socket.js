import Ember from 'ember';

const { Service, inject: { service }, computed } = Ember;

export default Service.extend({
  cable: service(),
  session: service(),
  store: service(),

  consumer: computed('session.data.authenticated.access_token', function() {
    let consumer = this.get('_consumer');
    let accessToken = this.get('session.data.authenticated.access_token');
    let url = `ws://localhost:28080${accessToken ? `?access_token=${accessToken}` : ''}`;

    if (consumer) {
      consumer.set('url', url);
      consumer.connection.reopen();
    } else {
      consumer = this.get('cable').createConsumer(url);
      this.set('_consumer', consumer);
    }

    return consumer;
  }),

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

  subscribe(channel, subscriber) {
    return this.get('consumer.subscriptions').create(channel, subscriber);
  }
});
