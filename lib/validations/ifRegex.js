'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rgx) {
  return function (str) {
    return typeof str === 'string' && rgx.test(str) || false;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=ifRegex.js.map