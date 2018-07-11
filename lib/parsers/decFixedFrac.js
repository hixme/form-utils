'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _strFixed = require('./strFixed');

var _strFixed2 = _interopRequireDefault(_strFixed);

var _strInt = require('./strInt');

var _strInt2 = _interopRequireDefault(_strInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (dec) {
  return function (strRaw) {
    var str = (0, _isString2.default)(strRaw) && strRaw || '';
    var split = str.split('.');
    if (split.length > 1) {
      return (0, _strInt2.default)(split[0]).concat('.', (0, _strFixed2.default)(dec)((0, _strInt2.default)(split[1])));
    }
    return (0, _strInt2.default)(str);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=decFixedFrac.js.map