import Ember from 'ember';
import goalFun from 'bepstore/utils/goalFun';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  renderTemplate() {
    goalFun.render(this, 'goal.new', true);
  }
});
