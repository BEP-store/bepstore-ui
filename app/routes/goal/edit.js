import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  model(params){
    return this.get('store').findRecord('goal', params.goal_id);
  },
  renderTemplate() {
    this.render('goal.edit', {
      into: 'application',
      outlet: 'modal'
    });
  }
});
