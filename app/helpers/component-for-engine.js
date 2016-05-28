import Ember from 'ember';

const { Helper } = Ember;

export default Helper.extend({
  compute(params) {
    let [engine, component] = params;
    return `bepstore-${engine}@${component}`;
  }
});
