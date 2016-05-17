import Ember from 'ember';
import mockMaker from '../utils/mockMaker';

export default Ember.Route.extend({
  model(params) {
    return mockMaker().oneGoal(params.goal_id);
  }
});
