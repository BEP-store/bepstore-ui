import Ember from 'ember';

const { String: { w } } = Ember;

export function firstLetters(rawName) {
  let names = w(rawName + '');
  let ret = "";
  names.forEach(function(name) {
    ret = ret + name.substr(0,1).capitalize();
  });
  return ret;
}

export default Ember.Helper.helper(firstLetters);
