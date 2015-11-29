import Ember from 'ember';

export default Ember.Controller.extend({
  fanScore: Ember.computed('model.fanScore', function () {
    return this.get('model.fanScore').objectAt(0);
  }),
  // team: Ember.computed('model.fanScore.team', function () {
  //   console.log('get team', this.get('fanScore.team'));
  //   return this.get('fanScore.team');
  // }),
});
