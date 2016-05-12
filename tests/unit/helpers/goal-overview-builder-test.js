/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  goalOverviewBuilder
} from 'bepstore-ui/helpers/goal-overview-builder';

describe('GoalOverviewBuilderHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = goalOverviewBuilder(42);
    expect(result).to.be.ok;
  });
});
