import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/routes/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  working: null,
  pending: null,
  done: null,

  model(){
    this.set('working',[]);
    this.set('pending',[]);
    this.set('done', []);

    let I = this.get('store').findRecord('user','current');
    this.get('store').findAll('goal').then((goals) => {
      goals.forEach(function(item) {
        item.get('contributors').then((contributors) => {
          if(contributors.isAny('id', I.get('id'))){
            let status = item.get('status');
            if(status === 'init' || status === 'spec-design'){
              alert(item.get('title'));
              this.get('pending').pushObject(item);
            }
            else if (status === 'building' || status === 'testing') {
              this.get('working').pushObject(item);
            }
            else if (status === 'finished') {
              this.get('done').pushObject(item);
            }
          }
        });
      });
    });
  }
});
