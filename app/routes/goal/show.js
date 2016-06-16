import Ember from 'ember';
import renderGoal from 'bepstore/utils/renderGoal';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  model(params){
    return this.get('store').findRecord('goal', params.goal_id);
  },
  renderTemplate() {
    renderGoal.render(this,'goal.show', false);
  }
});
