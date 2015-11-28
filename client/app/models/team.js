import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  twitter: DS.attr('string'),
  fanScore: DS.attr('number'),
  games: DS.hasMany('game'),
  fans: DS.hasMany('fan'),
});
