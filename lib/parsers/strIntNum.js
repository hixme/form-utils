'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strInt = require('./strInt');

var _strInt2 = _interopRequireDefault(_strInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (str) {
  var result = (0, _strInt2.default)(str);
  var num = Number(result);
  return !Number.isNaN(num) && num.toString() || '';
};

module.exports = exports['default'];
//# sourceMappingURL=strIntNum.js.map