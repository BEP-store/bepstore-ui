import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  classNames: 'chat-window',
  session: service(),

  openChat: false,
  windowSize: 'chat-closed',
  contentChat: true,
  messages: [],

  actions: {
    toggle: function() {
      this.toggleProperty('openChat');
      if(this.get('openChat')){
        this.set('windowSize', 'chat-open');
      } else {
        this.set('windowSize', 'chat-closed');
      }
    },
    sendMessage: function(message) {
      if(this.get('messages.lastObject.userid') === this.get('session.user.id')){
        let messages = this.get('messages.lastObject.body');
        messages.addObject({id:messages.length, content: message});
      }
      else {
        this.get('messages').addObject({userid:this.get('session.user.id'), body: [{id:1,content:message}]});
      }
    }

  }
});
