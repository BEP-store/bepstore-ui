import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';

var testGoals = [{
  id:1,
  title:"Language: fill in the blank question creator",
  description:"test1 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  progress:"init",
  po:'',
  hd:2,
  hfe:3,
  hbe:4
}, {
  id:2,
  title:"test2",
  description:"test2 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  progress:"spec-design",
  po:5,
  hd:6,
  hfe:7,
  hbe:8
}, {
  id:3,
  title:"test3",
  description:"test3 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  progress:"testing",
  po:9,
  hd:'',
  hfe:7,
  hbe:10
}, {
  id:7,
  title:"test4",
  description:"test4 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  progress:"finished",
  po:12,
  hd:67,
  hfe:45,
  hbe:10
}, {
  id:9,
  title:"test8",
  description:"test8 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  progress:"building",
  po:91,
  hd:56,
  hfe:'',
  hbe:67
}];

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return testGoals;
  }
});
