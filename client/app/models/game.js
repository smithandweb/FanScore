import DS from 'ember-data';

export default DS.Model.extend({
  awayTeam: DS.belongsTo('team'),
  homeTeam: DS.belongsTo('team'),
  stadium: DS.belongsTo('stadium'),
  score: DS.attr(),
  attendance: DS.attr('number'),
  soldout: DS.attr('boolean'),
  date: DS.attr('date'),
});
