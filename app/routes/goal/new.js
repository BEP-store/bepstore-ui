import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  renderTemplate() {
    this.render('goal.new', {
      into: 'application',
      outlet: 'modal'
    });
  }
});
