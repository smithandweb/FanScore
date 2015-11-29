import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  name: DS.attr('string'),
  twitter: DS.attr('string'),
  fanScore: DS.attr('number'),
  games: DS.hasMany('game', {inverse: null}),
  fans: DS.hasMany('fan'),
  cssClass: Ember.computed('name', function () {
    return this.get('name').dasherize();
  })
});
