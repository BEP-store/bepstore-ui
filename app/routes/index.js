import Ember from 'ember';

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
}];

export default Ember.Route.extend({
  model(){
    return testGoals;
  }
});
