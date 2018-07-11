'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rgx) {
  var repl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (str) {
    return typeof str === 'string' && str.replace(rgx, repl) || '';
  };
};

module.exports = exports['default'];
//# sourceMappingURL=regReplace.js.map