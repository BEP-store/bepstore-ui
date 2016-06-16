import Ember from 'ember';
import ApplicationRouteMixin from 'feedbackfruits-accounts/mixins/routes/application-route-mixin';

const { Route, inject: { service } } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  socket: service(),

  title(tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.push('FeedbackFruits');
    let title = tokens.join(' - ');

    return title;
  },

  activate() {
    this._super(...arguments);
    // this.get('socket').subscribe('accounts', 'gitter', this.get('socket').createResourceSubscriber());
    this.get('socket').subscribe('api', 'GoalChannel', this.get('socket').createResourceSubscriber());
  },

  deactivate() {
    this._super(...arguments);
  }
});
