import Ember from 'ember';
import goalFun from 'bepstore/utils/goalFun';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  afterModel: function() {
    this.set('model', this.modelFor('goal'));
  },

  renderTemplate() {
    goalFun.render(this,'goal.edit', true);
  }
});
