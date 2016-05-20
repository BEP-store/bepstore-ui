import { ActiveModelSerializer } from 'active-model-adapter';
import DS from 'ember-data';

const { EmbeddedRecordsMixin } = DS;

export default ActiveModelSerializer.extend(EmbeddedRecordsMixin, {
  /**
   * Override noSerializeOptionSpecified method for all models
   * Will make sure serializer listens to hasSerializeIdsOption
   *
   * @public
   */
  noSerializeOptionSpecified() {
    return false;
  },

  /**
   * Override hasSerializeIdsOption method for all models
   * Will save has many relationships to the backend as well
   * to allow use of has_and_belongs_to_many
   *
   * @public
   */
  hasSerializeIdsOption() {
    return true;
  },

  /**
   * Override normalize method for activities
   * will use `type` attribute if present to determine model
   *
   * @public
   */
  normalize(modelClass, resourceHash, prop) {
    if (resourceHash.type) {
      modelClass = this.store.modelFor(resourceHash.type);
    }

    return this._super(modelClass, resourceHash, prop);
  }
});