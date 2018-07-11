'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _strInt = require('./strInt');

var _strInt2 = _interopRequireDefault(_strInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strRaw) {
  var str = (0, _isString2.default)(strRaw) && strRaw || '';
  var split = (str || '').split('.');
  if (split.length > 1) {
    return split.slice(0, 2).map(_strInt2.default).join('.');
  }
  return (0, _strInt2.default)(split);
};

module.exports = exports['default'];
//# sourceMappingURL=strDec.js.map