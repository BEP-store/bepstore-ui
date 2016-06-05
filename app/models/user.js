import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

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

  bio: attr('string')
});
