'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strFixed = require('./strFixed');

var _strFixed2 = _interopRequireDefault(_strFixed);

var _strDec = require('./strDec');

var _strDec2 = _interopRequireDefault(_strDec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (int, dec) {
  return function (rawStr) {
    var str = (0, _strDec2.default)(rawStr);
    var split = str.split('.');
    if (split.length > 1) {
      var arr = [int, dec];
      return split.slice(0, 2).map(function (s, idx) {
        return (0, _strFixed2.default)(arr[idx])(s);
      }).join('.');
    }
    if (str === '') return '';
    return (0, _strFixed2.default)(int)(str);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=decFixedIntFrac.js.map