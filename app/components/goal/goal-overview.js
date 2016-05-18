import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    showDescr() {
      this.toggleProperty('showAll');
    }
  }
});
