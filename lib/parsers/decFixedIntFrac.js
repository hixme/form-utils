'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strFixed = require('./strFixed');

var _strFixed2 = _interopRequireDefault(_strFixed);

var _strInt = require('./strInt');

var _strInt2 = _interopRequireDefault(_strInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (int, dec) {
  return function (strRaw) {
    var str = typeof strRaw === 'string' && strRaw || '';
    var split = (0, _strInt2.default)(str).split('.');
    if (split.length > 1) {
      var arr = [int, dec];
      return split.slice(0, 2).map(function (s, idx) {
        return (0, _strFixed2.default)(arr[idx])(s);
      }).join('.');
    }
    return (0, _strFixed2.default)(int)(str);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=decFixedIntFrac.js.map