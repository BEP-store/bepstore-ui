import Ember from 'ember';

const { computed, inject: { service } } = Ember;

export default Ember.Component.extend({
  session: service(),

  isLoggedIn: computed('session.user', function(){
    if(this.get('session.user.id')){
      return true;
    }
    return false;
  })
});
