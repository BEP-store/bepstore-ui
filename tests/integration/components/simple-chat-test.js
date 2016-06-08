/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'simple-chat',
  'Integration: SimpleChatComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#simple-chat}}
      //     template content
      //   {{/simple-chat}}
      // `);

      this.render(hbs`{{simple-chat}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
