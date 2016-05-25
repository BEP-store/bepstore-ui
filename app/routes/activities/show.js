import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  model(params){
    return this.get('store').findRecord('goal', params.activity_id);
  },
  renderTemplate() {
    this.render('activities.show', {
      into: 'application',
      outlet: 'modal'
    });
  }
});
