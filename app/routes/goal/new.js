import Ember from 'ember';
import renderGoal from 'bepstore/utils/renderGoal';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  renderTemplate() {
    renderGoal.render(this, 'goal.new', true);
  }
});
