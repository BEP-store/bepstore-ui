import Ember from 'ember';

var testGoals = [{
  id:1,
  title:"test1",
  description:"test1 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  po:1,
  hd:2,
  hfe:3,
  hbe:4
}, {
  id:2,
  title:"test2",
  description:"test2 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  po:5,
  hd:6,
  hfe:7,
  hbe:8
}, {
  id:3,
  title:"test1",
  description:"test1 test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
  po:9,
  hd:2,
  hfe:7,
  hbe:10
}];

export default Ember.Route.extend({
  model(){
    return testGoals;
  }
});
