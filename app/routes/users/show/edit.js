import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

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
      alert(this.get('model.name'));
    }
  }
});
