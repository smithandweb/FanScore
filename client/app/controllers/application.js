import Ember from 'ember';

export default Ember.Controller.extend({
  menuHidden: 'hidden',
  actions: {
    toggleMenu () {
      if (this.get('menuHidden')) {
        this.set('menuHidden', null);
      }
      else {
        this.set('menuHidden', 'hidden');
      }
    }
  }
});
