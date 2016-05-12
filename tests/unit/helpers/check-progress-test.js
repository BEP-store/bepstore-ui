/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  checkProgress
} from 'bepstore-ui/helpers/check-progress';

describe('CheckProgressHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = checkProgress(42);
    expect(result).to.be.ok;
  });
});
