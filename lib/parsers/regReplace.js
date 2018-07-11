'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (rgx) {
  var repl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (str) {
    return (0, _isString2.default)(str) && str.replace(rgx, repl) || '';
  };
};

module.exports = exports['default'];
//# sourceMappingURL=regReplace.js.map