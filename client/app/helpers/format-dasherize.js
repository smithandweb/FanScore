import Ember from 'ember';

export function formatDasherize(params/*, hash*/) {
  let [string] = params;
  return string.dasherize();
}

export default Ember.Helper.helper(formatDasherize);
