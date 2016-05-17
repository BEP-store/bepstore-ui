/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'badge/status-badge',
  'Integration: BadgeStatusBadgeComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#badge/status-badge}}
      //     template content
      //   {{/badge/status-badge}}
      // `);

      this.render(hbs`{{badge/status-badge}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
