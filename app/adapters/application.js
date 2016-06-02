import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'feedbackfruits-accounts/mixins/adapters/data-adapter-mixin';
import config from '../config/environment';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: config.host,
  namespace: config.namespace,
  coalesceFindRequests: true,
  authorizer: 'authorizer:feedbackfruits'
});
