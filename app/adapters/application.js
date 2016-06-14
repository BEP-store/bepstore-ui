import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'feedbackfruits-accounts/mixins/adapters/data-adapter-mixin';
import config from 'bepstore/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.host,
  namespace: config.namespace,
  coalesceFindRequests: true,
  authorizer: 'authorizer:feedbackfruits',

  // allows the multiword paths in urls to be underscored
  pathForType(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
