import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').findAll('goal');
  },

  afterModel(model){
    return model.sortBy('contributors.length').reverse();
  }
});
