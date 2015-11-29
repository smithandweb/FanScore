import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForRelationship (key/*, relationship, method*/) {
    if (key === 'fanscore') {
      return 'fanScore';
    }
    else {
        return key;
    }
  }, // keyForRelationship
});
