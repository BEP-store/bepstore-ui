import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';

const { inject: { service } } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  /*
  account: service(),
  model(){
    this.get('store').queryRecord('user', { filter: { account: this.get('account').get('id') } }).then(function(user){
      return Ember.RSVP.hash({
        pending: user.get('pending_goals'),
        building: user.get('building_goals'),
        finished: user.get('finished_goals'),
      });
    });
  */  
    return this.get('store').findAll('goal');
  }
});
