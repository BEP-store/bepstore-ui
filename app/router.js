import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  let goal = function() {
    this.route('new');
    this.route('edit', { path: '/:goal_id/edit'});
    this.route('destroy', { path: '/:goal_id/destroy' });
    this.route('show', { path: '/:goal_id' }, function() {
      this.route('new');
      this.route('edit');
      this.route('destroy');
      this.route('show');
    });
  };

  this.route('register');

  this.route('login', function() {
    this.route('identity-provider');
    this.route('email');
  });

  this.route('auth', function() {
    this.route('external', { path: '/:identity_provider_id' });
    this.route('callback');
  });

  this.route('logout');

  this.route('index', {path:'/'}, function() {
    this.route('mygoals', function() {
      this.route('goal', goal);
    });
    this.route('trending', function() {
      this.route('goal', goal);
    });
    this.route('newgoals', function() {
      this.route('goal', goal);
    });
    this.route('goal',goal);
  });

  this.route('users', function() {
    this.route('show', { path: '/:user_id'});
    this.route('me', function() {
      this.route('edit');
      this.route('link');
    });
  });
});

export default Router;
