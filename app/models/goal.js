import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

const { computed: { filterBy } } = Ember;

/**
 * The goal Model
 *
 * @module app/models/goal
 * @public
 */
export default Model.extend({
  title: attr('string'),

  description: attr('string'),

  status: attr('string'),

  update: attr('text'),

  contributers: hasMany('user'),

  product_owner: belongsTo('user', { inverse: null }),

  head_design: belongsTo('user', { inverse: null }),

  head_front_end: belongsTo('user', { inverse: null }),

  head_back_end: belongsTo('user', { inverse: null }),

  nr_volunteers: filterBy('user').length

});
