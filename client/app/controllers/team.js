import Ember from 'ember';

export default Ember.Controller.extend({
  fans: Ember.computed('model.fans', function () {
    let fans;
    if (this.get('model.fans')) {
      fans = this.get('model.fans').map((item) => {
        return {
          fanScore: item.get('fanScore').objectAt(0), 
          name: item.get('name'),
          id: item.get('id')
        };
      });
    }
    return fans;
  }),
});
