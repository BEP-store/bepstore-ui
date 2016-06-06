/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'mygoals/pending-goals',
  'Integration: MygoalsPendingGoalsComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#mygoals/pending-goals}}
      //     template content
      //   {{/mygoals/pending-goals}}
      // `);

      this.render(hbs`{{mygoals/pending-goals}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
