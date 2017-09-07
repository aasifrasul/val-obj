(function() {
  "use srict";

  module.exports = function valObj(obj, key, val) {
    var valid = false;
    valid = obj !== null && !Array.isArray(obj) && typeof obj === 'object';
    if (key && valid) {
      valid = typeof key === 'string' && obj.hasOwnProperty(key);
    }
    if (val && valid) {
      valid = val == obj[key];
    }
    return valid;
  }

}());
