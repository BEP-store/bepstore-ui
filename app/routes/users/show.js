import Ember from 'ember';
import ceesHerpdiederpston from 'bepstore/utils/ceesHerpdiederpston';

export default Ember.Route.extend({
  model(params) {
    if(params.user_id === 'current' || this.get('store').peekRecord('user', params.user_id)){
      return this.get('store').findRecord('user', params.user_id);
    } else {
      return ceesHerpdiederpston().create();
    }
  }
});
