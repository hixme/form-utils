'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sffx) {
  return function (raw) {
    var str = typeof raw === 'string' && raw || '';
    if (str === sffx || str === '') return '';
    return str.charAt(str.length - 1) === sffx && str || str.concat(sffx);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=includeSuffix.js.map