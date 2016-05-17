import Ember from 'ember';
import ApplicationRouteMixin from 'feedbackfruits-accounts/mixins/application-route-mixin';

const { Route, inject: { service } } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  title(tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.push('FeedbackFruits');
    let title = tokens.join(' - ');
    // if (this.get('session.user.unread_notifications.length') > 0) {
    //   title = `(${this.get('session.user.unread_notifications.length')}) ${title}`;
    // }
    return title;
  }
});
