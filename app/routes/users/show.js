import Ember from 'ember';
import ceesHerpdiederpston from 'bepstore/utils/ceesHerpdiederpston';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.user_id).catch(err => {
      console.error(err);
      return ceesHerpdiederpston().create();
    });
  }
});