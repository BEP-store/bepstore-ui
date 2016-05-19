import Ember from 'ember';
import ClickOutsideMixin from 'ember-click-outside/mixins/click-outside';

const { $, Mixin, on, run: { next } } = Ember;

export default Mixin.create(ClickOutsideMixin, {
  clickOutsideContainer: window,

  _attachClickOutsideHandler: on('didInsertElement', function() {
    next(this, this.addClickOutsideListener);
  }),

  _removeClickOutsideHandler: on('willDestroyElement', function() {
    this.removeClickOutsideListener();
  }),

  addClickOutsideListener() {
    let clickHandler = this.get('clickHandler');
    $(this.get('clickOutsideContainer')).on('click', clickHandler);
  },

  removeClickOutsideListener() {
    let clickHandler = this.get('clickHandler');
    $(this.get('clickOutsideContainer')).off('click', clickHandler);
  }
});
