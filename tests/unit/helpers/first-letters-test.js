/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  firstLetters
} from 'bepstore/helpers/first-letters';

describe('FirstLetterHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = firstLetters(42);
    expect(result).to.be.ok;
  });
});
