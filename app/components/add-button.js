import Ember from 'ember';
import ClickOutside from 'bepstore/mixins/click-outside';

const { Component, computed, inject: { service } } = Ember;

/**
 * Add button within a group page
 * @public
 */
export default Component.extend(ClickOutside, {
  media: service(),
  session: service(),
  router: service(),

  activitiesNewRoute: computed('session.baseRoute', function() {
    return `activities.new`;
  }),

  actions: {
    clickButton() {
      this.get('router').transitionTo(this.get('activitiesNewRoute'));
      // this.set('_isBottomSheetShown', !this.get('_isBottomSheetShown'));
    }
  },

  _isBottomSheetShown: false,

  clickOutside() {
    this.set('_isBottomSheetShown', false);
  }
});
