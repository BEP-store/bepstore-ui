import Ember from 'ember';
// import mockMaker from '../utils/mockMaker';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('activity', params.goal_id);
  }
});
