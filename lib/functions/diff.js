'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fp = require('lodash/fp');

var tf = _fp.transform.convert({ cap: false });

var diff = function diff(bObj, targetObj) {
  var iteratee = function iteratee(baseObj) {
    return function () {
      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var value = arguments[1];
      var key = arguments[2];

      var newVals = {};
      if (!(0, _fp.isEqual)(value, baseObj[key])) {
        newVals[key] = (0, _fp.isObject)(value) && (0, _fp.isObject)(baseObj[key]) && diff(baseObj[key], value) || value;
      }
      return Object.assign(result, newVals);
    };
  };
  return tf(iteratee(bObj), null, targetObj);
};

exports.default = diff;
module.exports = exports['default'];
//# sourceMappingURL=diff.js.map