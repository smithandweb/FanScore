import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForRelationship (key/*, relationship, method*/) {
    if (key === 'awayteam') {
      return 'awayTeam';
    }
    else if (key === 'hometeam') {
      return 'homeTeam';
    }
    else {
        return key;
    }
  }, // keyForRelationship
});
