import DS from 'ember-data';

export default DS.Model.extend({
  team: DS.belongsTo('team'),
  interactions: DS.attr('number'),
  score: DS.attr('number'),
  daterange: DS.attr(),
});
