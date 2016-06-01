import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';

const { observer, inject: { service } } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  setSelf: observer('session.user', function() {
    this.render();
    this.render('users.show', {
      into: 'application',
      model: this.get('session.user')
    });
  }),

  renderTemplate() {
    this.render();
    this.render('users.show', {
      into: 'application',
      model: this.get('session.user')
    });
  }
});
