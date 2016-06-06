import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  working: computed('model', function() {
    let goals = this.get('model');
    return goals.filter(goal => {
      let status = goal.get('status');
      return status === 'building' || status === 'testing';
    });
  })
});
