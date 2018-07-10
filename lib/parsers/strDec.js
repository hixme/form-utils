'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strInt = require('./strInt');

var _strInt2 = _interopRequireDefault(_strInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (str === '') return '';
  if (typeof str !== 'string') return str;
  var split = str.split('.');
  if (split.length > 1) {
    return split.slice(0, 2).map(_strInt2.default).join('.');
  }
  return (0, _strInt2.default)(str);
};

module.exports = exports['default'];
//# sourceMappingURL=strDec.js.map