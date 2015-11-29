import Ember from 'ember';

export function formatDasherize(params/*, hash*/) {
  let [string] = params;
  if (string) {
    if (typeof string !== 'string') {
      string = '';
    }
  } else {
    string = '';
  }
  
  return string.dasherize();
}

export default Ember.Helper.helper(formatDasherize);
