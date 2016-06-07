/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'mygoals/selection-goals',
  'Integration: MygoalsSelectionGoalsComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#mygoals/selection-goals}}
      //     template content
      //   {{/mygoals/selection-goals}}
      // `);

      this.render(hbs`{{mygoals/selection-goals}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
