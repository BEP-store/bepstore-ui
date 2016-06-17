import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/routes/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(){
    return this.get('store').findAll('goal');
  }
});
