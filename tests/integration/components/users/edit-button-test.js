/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'users/edit-button',
  'Integration: UsersEditButtonComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#users/edit-button}}
      //     template content
      //   {{/users/edit-button}}
      // `);

      this.render(hbs`{{users/edit-button}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
