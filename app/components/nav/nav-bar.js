import Ember from 'ember';

const { Component, inject: { service }, computed: { alias } } = Ember;


export default Component.extend({
  session: service(),
  user: alias('session.user'),

  tagName: 'nav',
  classNames: 'mdl-navigation fbf-navigation-drawer'
});
