import Ember from 'ember';
import goalFun from 'bepstore/utils/goalFun';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  model(params){
    return this.get('store').findRecord('goal', params.goal_id);
  },
  renderTemplate() {
    goalFun.render(this,'goal.edit',true);
  }
});
