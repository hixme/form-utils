'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sffx) {
  return function (raw) {
    var str = (0, _isString2.default)(raw) && raw || '';
    if (str === sffx || str === '') return '';
    return str.charAt(str.length - 1) === sffx && str || str.concat(sffx);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=includeSuffix.js.map