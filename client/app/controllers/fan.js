import Ember from 'ember';

export default Ember.Controller.extend({
  fanScore: Ember.computed('model.fanScore', function () {
    return this.get('model.fanScore').objectAt(0);
  }),
});
