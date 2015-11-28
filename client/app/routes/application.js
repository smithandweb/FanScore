import Ember from 'ember';

export default Ember.Route.extend({
  // model () {
  //   return this.stoe.finaAll('test');
  // },
  actions: {
    post () {
      this.store.createRecord('test', {
        name: 'test',
        email: 'test',
      }).save();
    }
  }
});
