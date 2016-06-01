import Ember from 'ember';

const { Component, observer, inject: { service } } = Ember;

export default Component.extend({
  session: service(),
  classNames: "nav_pic",

  setSelf: observer('session.user', function() {
    alert(this.get('session.user.name'));
    this.set('user', this.get('session.user'))
  }),

  afterModel(){
    alert('test');
  }
});
