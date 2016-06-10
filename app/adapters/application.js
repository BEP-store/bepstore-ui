import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'feedbackfruits-accounts/mixins/adapters/data-adapter-mixin';
import config from 'bepstore/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.host,
  namespace: config.namespace,
  coalesceFindRequests: true,
  authorizer: 'authorizer:feedbackfruits'
});
