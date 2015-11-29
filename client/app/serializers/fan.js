import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForRelationship (key/*, relationship, method*/) {
    if (key === 'fanscores') {
      return 'fanScores';
    }
    else {
        return key;
    }
  }, // keyForRelationship
});
