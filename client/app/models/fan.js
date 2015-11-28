import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  fanScores: DS.hasMany('fanscore')
});
