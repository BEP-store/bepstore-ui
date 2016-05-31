import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';

const { computed, on, inject: { service } } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  user: computed('session.user', function() {
    alert(this.get('session.user'));
    return this.get('session.user');
  }),

  model(){
    return this.get('user');
  },

  renderTemplate() {
    this.render('users.show', {
      into: 'application'
    });
  }
});
