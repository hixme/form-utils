'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (pffx) {
  return function (raw) {
    var str = (0, _isString2.default)(raw) && raw || '';
    if (str === pffx || str === '') return '';
    return str.charAt(0) === pffx && str || pffx.concat(str);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=includePrefix.js.map