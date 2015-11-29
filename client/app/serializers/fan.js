import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForRelationship (key/*, relationship, method*/) {
    if (key === 'fanscores') {
      return 'fanScores';
    }
    else {
        return key;
    }
  }, // keyForRelationship
});
