'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strIntNum = require('./strIntNum');

var _strIntNum2 = _interopRequireDefault(_strIntNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var int = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (str) {
    return (0, _strIntNum2.default)(str).slice(0, int);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=intFixed.js.map