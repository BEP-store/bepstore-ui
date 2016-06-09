/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'chat/chat-textfield',
  'Integration: ChatChatTextfieldComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#chat/chat-textfield}}
      //     template content
      //   {{/chat/chat-textfield}}
      // `);

      this.render(hbs`{{chat/chat-textfield}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
