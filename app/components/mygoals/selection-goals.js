import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  titleByType: {
    working: "Goals you can contribute to",
    pending: "Goals you want to contribute to",
    done: "Finished Goals you contributed to"
  },

  statusByType: {
    working: ['building', 'testing'],
    pending: ['init', 'spec-design'],
    done:    ['done']
  },

  selection: computed('model','type', function() {
    let type = this.get('type');
    this.set('title', this.get('titleByType')[type]);
    let goals = this.get('model') || [];
    return goals.filter((goal) => {
      let status = goal.get('status');
      return this.get('statusByType')[type].indexOf(status) > -1;
    });
  })
});
