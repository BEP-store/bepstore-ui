import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

const { computed: { filterBy } } = Ember;

  /**
   * The goal Model
   *
   * @module app/models/user
   * @public
   */
export default Model.extend({
  /**
   * The account of the user
   *
   * @type string
   * @public
   */
  account: belongsTo('account'),

  name: attr('string'),

  goals: hasMany('goal', { inverse: 'contributors' }),

  pending_goals: Ember.merge( filterBy('goal', 'status', 'init'), filterBy('goal', 'status', 'spec-design') ),

  building_goals: Ember.merge( filterBy('goal', 'status', 'building'), filterBy('goal', 'status', 'testing') ),

  finished_goals: filterBy('goal', 'status', 'finished')
});
