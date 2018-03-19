'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _integer = require('../regex/integer');

var _integer2 = _interopRequireDefault(_integer);

var _regReplace = require('./regReplace');

var _regReplace2 = _interopRequireDefault(_regReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (str) {
  if (typeof str === 'string') {
    var result = (0, _regReplace2.default)(_integer2.default)(str);
    var num = Number(result);
    return !Number.isNaN(num) && num.toString() || '';
  }
  return str;
};

module.exports = exports['default'];
//# sourceMappingURL=strIntNum.js.map