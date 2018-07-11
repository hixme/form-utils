'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (min) {
  return function (num) {
    return (0, _isString2.default)(num) && Math.max(min, Number(num)).toString() || num;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=intMinNum.js.map