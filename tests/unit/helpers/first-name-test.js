/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  firstName
} from 'bepstore/helpers/first-name';

describe('FirstNameHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = firstName(42);
    expect(result).to.be.ok;
  });
});
