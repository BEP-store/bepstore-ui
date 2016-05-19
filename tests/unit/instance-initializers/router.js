/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it,
  beforeEach
} from 'mocha';
import Ember from 'ember';
import { initialize } from 'bepstore/instance-initializers/router';

describe('RouterInitializer', function() {
  let application, instance;

  beforeEach(function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
      instance = application.buildInstance();
    });
  });

  // Replace this with your real tests.
  it('works', function() {
    initialize(instance);

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok;
  });
});
