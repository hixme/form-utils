'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var int = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (str) {
    return typeof str === 'string' && str.slice(0, str.length - int) || '';
  };
};

module.exports = exports['default'];
//# sourceMappingURL=strTrim.js.map