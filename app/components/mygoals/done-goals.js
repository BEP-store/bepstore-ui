import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  done: computed('model', function() {
    let goals = this.get('model');
    let status = 'finished';
    return goals.filterBy('status', status)
  })
});
