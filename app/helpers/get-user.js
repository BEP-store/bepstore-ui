import Ember from 'ember';

export function getUser(params) {
  if(params[0]){
    return params[0];
  }
  return "?";
}

export default Ember.Helper.helper(getUser);
