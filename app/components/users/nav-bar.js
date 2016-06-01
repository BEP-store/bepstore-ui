import Ember from 'ember';

const { Component, on, observer, inject: { service } } = Ember;

export default Component.extend({
  session: service(),
  isCurrentUser: false,

  resetSelf: observer('session.user', function() {
    this.set('isCurrentUser', this.get('session.user.id') === this.get('model.id'));
  }),

  setSelf: on('init', function(){
    this.set('isCurrentUser', this.get('session.user.id') === this.get('model.id'));
  })
});
