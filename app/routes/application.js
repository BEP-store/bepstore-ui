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
    let socket = this.get('socket');

    socket.subscribe('api', 'GoalChannel', socket.createResourceSubscriber());
    socket.subscribe('accounts', 'gitter', socket.createGitterSubscriber());
  },

  deactivate() {
    this._super(...arguments);
  }
});
