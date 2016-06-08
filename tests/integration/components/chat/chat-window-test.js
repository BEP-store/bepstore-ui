/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'chat/chat-window',
  'Integration: ChatChatWindowComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#chat/chat-window}}
      //     template content
      //   {{/chat/chat-window}}
      // `);

      this.render(hbs`{{chat/chat-window}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
