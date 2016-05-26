import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  afterModel: function() {
    this.set('model', this.modelFor('goal'));
  },

  renderTemplate() {
    this.render('goal.destroy', {
      into: 'application',
      outlet: 'modal'
    });
  }
});
