import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bar-graph'],
  barStyle: Ember.computed('percentage', function () {
    return new Ember.Handlebars.SafeString('width:' + this.get('percentage') + '%;');
  }),
});
