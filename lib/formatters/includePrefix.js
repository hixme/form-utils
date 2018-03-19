'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pffx) {
  return function (raw) {
    var str = typeof raw === 'string' && raw || '';
    if (str === pffx || str === '') return '';
    return str.charAt(0) === pffx && str || pffx.concat(str);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=includePrefix.js.map