'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (rgx) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (str) {
    if ((0, _isString2.default)(str)) {
      var finds = str.match(rgx);
      return finds && finds[num];
    }
    return false;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=regFind.js.map