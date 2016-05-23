import Transform from 'ember-data/transform';
import moment from 'moment';

export default Transform.extend({
  deserialize(serialized) {
    if (serialized) {
      return moment(moment.utc(serialized).toDate());
    } else {
      return null;
    }
  },

  serialize(deserialized) {
    if (deserialized && moment.utc(deserialized).isValid()) {
      return moment.utc(deserialized).toJSON();
    } else {
      return null;
    }
  }
});
