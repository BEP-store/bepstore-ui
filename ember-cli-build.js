/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var environment = process.env.EMBER_ENV;
  var isProduction = ['staging', 'production'].indexOf(environment) >= 0;

  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: [
        'API_HOST',
        'ACCOUNTS_HOST',
        'CLIENT_SECRET'
      ]
    },
    sassOptions: {
      extension: 'sass',
      includePaths: [
        'bower_components/material-design-lite/src',
        'bower_components/roboto-fontface/css'
      ]
    },
    minifyJS: {
      enabled: isProduction
    },
    minifyCSS: {
      enabled: isProduction
    },
    sourcemaps: {
      enabled: !isProduction
    },
    autoprefixer: {
      enabled: isProduction
    },
    fingerprint: {
      enabled: isProduction,
      exclude: [
        'favicon.ico',
        'assets/images/organizations'
      ],
      extensions: [
        'js',
        'css',
        'png',
        'map',
        'svg',
        'mp4',
        'eot',
        'ttf',
        'woff',
        'woff2',
        'json'
      ]
    },
    jscsOptions: {
      testGenerator: testGenerator
    },
    tests: !isProduction,
    hinting: !isProduction
  });

  function testGenerator(relativePath, errors) {
    if (errors) {
      errors = this.escapeErrorString('\n' + errors);
    }

    return [
      'describe("JSCS - ' + relativePath + '", function () {',
        'it("should pass jscs", function () {',
          'expect(' + !errors + ', "' + relativePath + ' should pass JSCS' + errors + '").to.be.ok;',
        '});',
      '});'
    ].join('\n');
  }

  app.import(app.bowerDirectory + '/prettysize-bower/prettysize.js');

  return app.toTree();
};
