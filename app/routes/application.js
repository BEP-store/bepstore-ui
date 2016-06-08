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
    // if (this.get('session.user.unread_notifications.length') > 0) {
    //   title = `(${this.get('session.user.unread_notifications.length')}) ${title}`;
    // }
    return title;
  },

  activate() {
    this._super(...arguments);
    this.set('_socketSubscription', this.get('socket').subscribe('GoalChannel', this.get('socket').createResourceSubscriber()));
  },

  deactivate() {
    this._super(...arguments);
    this.get('_socketSubscription').unsubscribe();
  }
});
