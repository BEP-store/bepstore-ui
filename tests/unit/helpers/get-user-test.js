/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  getUser
} from 'bepstore/helpers/get-user';

describe('GetUserHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = getUser(42);
    expect(result).to.be.ok;
  });
});
