import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  twitter: DS.attr('string'),
  games: DS.hasMany('game', {inverse: null}),
  fans: DS.hasMany('fan'),
  fanScore: Ember.computed('name', function () {
    if (this.get('name') === 'Hamilton Tiger-Cats') {
      return 3 * 8317;
    }
    else {
      return Math.floor(((Math.random() * 0.3) + 2.4) * 8000);
    }
  }),
  fanScorePercent: Ember.computed('fanScore', function () {
    return Math.floor((this.get('fanScore') / 26000) * 100);
  })
});
