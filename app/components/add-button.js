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
    return `index.mygoals.goal.new`;
  }),

  actions: {
    clickButton() {
      this.get('router').transitionTo(this.get('activitiesNewRoute'));
    }
  },

  _isBottomSheetShown: false,

  clickOutside() {
    this.set('_isBottomSheetShown', false);
  }
});
