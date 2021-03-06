/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fan-score-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      host: 'http://api.fanscore.xyz',
    },

    contentSecurityPolicy: {
      // 'default-src': "'unsafe-inline'",
      'script-src': "'self' https://*.googleapis.com https://*.gstatic.com ",
      'font-src': "'self' https://*.gstatic.com ",
      'connect-src': "'self' ",
      'img-src': "'self' https://*.googleapis.com https://*.gstatic.com data * ",
      'style-src': "'self' 'unsafe-inline' https://*.googleapis.com ",
      'media-src': "'self' "
    }
    
    
    
  };
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    
    
  }
  
  if (environment === 'local') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    ENV.APP.host = 'http://api.fanscore.abc:8080';
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
  
  ENV.contentSecurityPolicy['connect-src'] +=
    ENV.APP.host;
  ENV.contentSecurityPolicy['script-src'] +=
    ENV.APP.host;

  return ENV;
};
