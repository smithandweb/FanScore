import Ember from 'ember';

export default Ember.Controller.extend({
  fanScores: Ember.computed(() => {
    window.fanscore = this;
    //return this.model.get('fanScores').objectAt(0);
  }) 
});
