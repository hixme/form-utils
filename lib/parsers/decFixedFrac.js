'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strFixed = require('./strFixed');

var _strFixed2 = _interopRequireDefault(_strFixed);

var _strDec = require('./strDec');

var _strDec2 = _interopRequireDefault(_strDec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (dec) {
  return function (raw) {
    var str = (0, _strDec2.default)(raw);
    var split = str.split('.');
    if (split.length > 1) {
      return split[0].concat('.', (0, _strFixed2.default)(dec)(split[1]));
    }
    return str;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=decFixedFrac.js.map