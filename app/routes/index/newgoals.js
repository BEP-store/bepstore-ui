import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').findAll('goal');
  //   .then(function (data) {
  //       return Ember.Object.extend({
  //           arrangedData: Ember.computed.sort('model', 'props'),
  //           props: ['created_at:desc']
  //       }).create({ model: data });
  //  });


    // return this.get('store').findAll('goal', {reload: true}).then(function(goals) { return goals.sortBy('created_at').reverse(); });
  }
});
