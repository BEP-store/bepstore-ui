import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'chat-window',
  openChat: false,
  windowSize: 'chat-closed',

  actions: {
    toggle: function() {
      this.toggleProperty('openChat');
      if(this.get('openChat')){
        this.set('windowSize', 'chat-open');
      } else {
        this.set('windowSize', 'chat-closed');
      }
    }
  }
});
