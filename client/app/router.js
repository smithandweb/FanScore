import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('fan', { path: '/fan/:fan_id' });
  this.route('fanscore', { path: '/fanscore/:fanscore_id' });
  this.route('team', { path: '/team/:team_id' });
  this.route('teams');
});

export default Router;
