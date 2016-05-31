import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.get('store').queryRecord('user', { filter: { account_id: params.user_id } }).then((user) => {
      return user;
    });
  }
});
