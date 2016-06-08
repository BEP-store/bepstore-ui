import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "chat-text-field",
  chat: { message: "" },

  actions: {
    send: function(){
      this.get('sendMessage')(this.get('chat.message'));
      this.set('chat.message',"");
    }
  }
});
