/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'goal-index',
  'Integration: GoalIndexComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#goal-index}}
      //     template content
      //   {{/goal-index}}
      // `);

      this.render(hbs`{{goal-index}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
