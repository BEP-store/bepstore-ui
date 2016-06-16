import Ember from 'ember';
import renderGoal from 'bepstore/utils/renderGoal';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  afterModel: function() {
    this.set('model', this.modelFor('goal'));
  },

  renderTemplate() {
    renderGoal.render(this,'goal.destroy', true);
  }
});
