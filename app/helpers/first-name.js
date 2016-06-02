import Ember from 'ember';

const { String: { w } } = Ember;

export function firstName(rawName) {
  let name = rawName + '';
  return w(name)[0];
}

export default Ember.Helper.helper(firstName);
