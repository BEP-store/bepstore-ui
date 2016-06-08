import Ember from 'ember';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  session: service(),
  store: service(),
  float: null,

  user: computed('userid', function() {
    if(this.get('userid') === this.get('session.user.id')){
      this.set('float','float:right');
    } else {
      this.set('float', 'float:left');
    }
    if(this.get('userid')){
      return this.get('store').findRecord('user',this.get('userid'));
    } else {
      return null;
    }
  })
});
