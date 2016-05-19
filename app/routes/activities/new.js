import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  renderTemplate() {
    this.render('activities.new', {
      // controller: `${this.get('session.baseRoute')}.activities.new`,
      into: 'application',
      // outlet: 'modal'
    });
  }
});
