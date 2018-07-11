'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (rgx) {
  return function (str) {
    return (0, _isString2.default)(str) && rgx.test(str) || false;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=ifRegex.js.map