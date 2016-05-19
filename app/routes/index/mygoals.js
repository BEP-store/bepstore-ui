import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';
import mockMaker from '../../utils/mockMaker';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return this.store.findAll('goal');
    //return mockMaker().multipleGoals();
  }
});
