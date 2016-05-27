import Ember from 'ember';
import Session from 'feedbackfruits-accounts/services/session';

const { observer, inject: { service } } = Ember;

/**
 * A session service to manage the session
 *
 * The session can be injected in any class:
 * ```javascript
 *   ...
 *   session: Ember.inject.service()
 *   ...
 * ```
 *
 * @module app/services/session
 * @public
 */
export default Session.extend({
  store: service(),

  /**
   * The session's user if it is authenticated
   *
   * @type app/models/user
   * @public
   */
  user: null,

  setUser: observer('isAuthenticated', 'data.authenticated.access_token', function() {
    if (this.get('isAuthenticated')) {
      return this.get('store').find('user', 'current').then((user) => {
        this.set('user', user);
      });
    }
  })
});
