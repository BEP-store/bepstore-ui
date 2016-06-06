/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'mygoals/working-goals',
  'Integration: MygoalsWorkingGoalsComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#mygoals/working-goals}}
      //     template content
      //   {{/mygoals/working-goals}}
      // `);

      this.render(hbs`{{mygoals/working-goals}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
