import layout from 'bepstore/templates/components/mygoals/goal-mine';
import Ember from 'ember';
import DS from 'ember-data';

const { computed, inject: { service } } = Ember;

export default Ember.Component.extend({
  layout,
  store: service(),

  titleByType: {
    working: "Goals you can contribute to",
    pending: "Goals you want to contribute to",
    done: "Finished Goals you contributed to"
  },

  statusByType: {
    working: ['building', 'testing'],
    pending: ['init', 'spec-design'],
    done:    ['finished']
  },

  selection: computed('model','type', function() {
    let type = this.get('type');
    let goals = this.get('model');
    let statusByType = this.get('statusByType');

    this.set('title', this.get('titleByType')[type]);

    return DS.PromiseObject.create({
     promise: this.get('store').findRecord('user','current')
      .then(function(me) {return me.get('id');})
      .then(function(myId) {
        return goals.filter((goal) => {
          let status = goal.get('status');
          let contributors = goal.get('contributors');

          return contributors.isAny('id', myId) && statusByType[type].indexOf(status) > -1;
        });
      })
    });
  }).property('model.@each')
});
