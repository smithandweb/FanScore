import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    this.transitionTo('fan', '565a0d9e679c391a673dbcaa');
  },
  model () {
    return this.store.findAll('game');
  },
});
