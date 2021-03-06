/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'nav/not-logged-in-buttons',
  'Integration: NavNotLoggedinButtonsComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#nav/not-logged-in-buttons}}
      //     template content
      //   {{/nav/not-logged-in-buttons}}
      // `);

      this.render(hbs`{{nav/not-logged-in-buttons}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
