'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rgx) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (str) {
    if (typeof str !== 'string') return str;
    var finds = str.match(rgx);
    return finds && finds[num];
  };
};

module.exports = exports['default'];
//# sourceMappingURL=regFind.js.map