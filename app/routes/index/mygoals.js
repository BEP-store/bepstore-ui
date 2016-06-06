import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/routes/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(){
    /* jshint ignore:start */
    return this.get('store').findRecord('user','current')
      .then(I => {
        let mapFn = (goal) => {
          return goal.get('contributors').then(contributors => {
            return [goal, contributors.isAny('id', I.get('id'))];
          });
        };
        return this.get('store').findAll('goal').then((goals) => {
          return Promise.all(goals.map(mapFn));
        }).then((mygoals) => {
          return mygoals.filter(([goal, isMine]) => isMine).map(([goal, isMine]) => goal);
        });
      });
      /* jshint ignore:end */
  }
});
