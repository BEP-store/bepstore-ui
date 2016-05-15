/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'goal-overview',
  'Integration: GoalOverviewComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#goal-overview}}
      //     template content
      //   {{/goal-overview}}
      // `);

      this.render(hbs`{{goal-overview}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
