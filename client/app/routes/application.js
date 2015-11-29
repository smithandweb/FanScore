import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('team');
  },
  actions: {
    post () {
      this.store.createRecord('test', {
        name: 'test',
        email: 'test',
      }).save();
    }
  }
});
