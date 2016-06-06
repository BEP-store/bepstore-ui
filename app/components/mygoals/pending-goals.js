import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  pending: computed('model', function() {
    let goals = this.get('model');
    return goals.filter((goal) => {
      let status = goal.get('status');
      return status === 'init' || status === 'spec-design'
    });
  })
});
