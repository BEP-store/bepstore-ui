/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'users/chat-pic',
  'Integration: UsersChatPicComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#users/chat-pic}}
      //     template content
      //   {{/users/chat-pic}}
      // `);

      this.render(hbs`{{users/chat-pic}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
