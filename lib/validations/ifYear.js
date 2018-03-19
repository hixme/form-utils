'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (year) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var currentYear = year || Number((0, _moment2.default)(Date.now()).format('YYYY'));
  return function (str) {
    var num = Number(str);
    return !Number.isNaN(num) && (num === currentYear || num === currentYear + range) || false;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=ifYear.js.map