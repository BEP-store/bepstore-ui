import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').findAll('goal').then(function(goals) { return goals.sortBy('contributors.length').reverse(); });
  }
});
