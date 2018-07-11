'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var int = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (str) {
    return (0, _isString2.default)(str) && str.slice(0, str.length - int) || '';
  };
};

module.exports = exports['default'];
//# sourceMappingURL=strTrim.js.map