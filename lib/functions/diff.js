'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fp = require('lodash/fp');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tf = _fp.transform.convert({ cap: false });

var diff = function diff(baseObj, targetObj) {
  var iteratee = function iteratee() {
    var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var value = arguments[1];
    var key = arguments[2];

    var baseObjKeyValue = baseObj[key];
    if ((0, _fp.isEqual)(value, baseObjKeyValue)) {
      return result;
    }
    var newVals = _defineProperty({}, key, (0, _fp.isObject)(value) && (0, _fp.isObject)(baseObjKeyValue) && diff(baseObjKeyValue, value) || value);

    return Object.assign(result, newVals);
  };
  return tf(iteratee, null, targetObj);
};

exports.default = diff;
module.exports = exports['default'];
//# sourceMappingURL=diff.js.map