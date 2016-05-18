import Ember from 'ember';
import ApplicationAdapter from './application';
import config from '../config/environment';

const { computed } = Ember;

export default ApplicationAdapter.extend({
  namespace: computed('engine', function() {
    return `${config.namespace}/engines/${this.get('engine')}`;
  })
});
