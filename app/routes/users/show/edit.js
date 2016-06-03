import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/routes/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  afterModel: function() {
    this.set('model', this.modelFor('users.show'));
  },

  renderTemplate() {
    this.render('users.show.edit', {
      into: 'application',
      outlet: 'modal'
    });
  },

  actions: {
    dismiss: function(){
      history.back();
    },

    save: function(){
      this.get('model').save().then(() => {
        history.back();
      });
    }
  }
});
