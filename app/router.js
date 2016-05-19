import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('activities', function() {
    this.route('new');
  });

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
    this.route('mygoals');
    this.route('trending');
    this.route('newgoals');
  });

  this.route('goal', {path:'/goal/:goal_id'}, function() {
    this.route('descr');
    this.route('core');
  });
});

export default Router;
