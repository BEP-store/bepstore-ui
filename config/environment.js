/* jshint node: true */

var defaults = {
  API_HOST: 'http://localhost.feedbackfruits.com:3000',
  API_WS_HOST: 'ws://localhost.feedbackfruits.com:3000/cable',
  ACCOUNTS_HOST: 'http://localhost.feedbackfruits.com:3001',
  ACCOUNTS_WS_HOST: 'ws://localhost.feedbackfruits.com:3001/socket',
  ADMIN_HOST: 'http://localhost.feedbackfruits.com:3000/admin',
  APPSIGNAL_ENABLED: false,

  production: {
    API_HOST: 'https://bepstore-api.feedbackfruits.com',
    API_WS_HOST: 'wss://bepstore-api.feedbackfruits.com/cable',
    ACCOUNTS_HOST: 'https://accounts.feedbackfruits.com',
    ACCOUNTS_WS_HOST: 'wss://accounts.feedbackfruits.com/socket',
    ADMIN_HOST: 'https://bepstore-admin.feedbackfruits.com',
    APPSIGNAL_ENABLED: true
  },

  staging: {
    API_HOST: 'https://staging-bepstore-api.feedbackfruits.com',
    API_WS_HOST: 'wss://staging-bepstore-api.feedbackfruits.com/cable',
    ACCOUNTS_HOST: 'https://staging-accounts.feedbackfruits.com',
    ACCOUNTS_WS_HOST: 'wss://staging-accounts.feedbackfruits.com/socket',
    ADMIN_HOST: 'https://staging-bepstore-admin.feedbackfruits.com',
    APPSIGNAL_ENABLED: true
  },

  mock: {
    API_HOST: 'http://localhost.feedbackfruits.com:3000',
    ACCOUNTS_HOST: 'http://staging-accounts.feedbackfruits.com',
    ADMIN_HOST: 'http://staging-bepstore-admin.feedbackfruits.com',
    APPSIGNAL_ENABLED: false,
  }
};

module.exports = function(environment) {
  function getEnv(key) {
    var envVar = (environment && process.env[environment.toUpperCase() + '_' + key]) || process.env[key];
    var defaultVar = (environment && defaults[environment] && defaults[environment][key]) || defaults[key];
    return envVar || defaultVar;
  }

  var ENV = {
    modulePrefix: 'bepstore',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    // TODO: Use non-feedbackfruits client
    // clientId: "FeedbackFruits",
    clientId: "BEP Store",
    clientSecret: getEnv('CLIENT_SECRET'),

    host: getEnv('API_HOST'),
    namespace: 'v1',

    accounts: {
      host: getEnv('ACCOUNTS_HOST')
    },

    admin: {
      host: getEnv('ADMIN_HOST')
    },

    sockets: [
      {
        name: 'api',
        host: getEnv('API_WS_HOST')
      },
      {
        name: 'accounts',
        host: getEnv('ACCOUNTS_WS_HOST')
      }
    ],

    'ember-simple-auth': {
      authenticationRoute: 'login'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
