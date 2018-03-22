"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (txt, valid) {
  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var allValues = arguments[1];
    var props = arguments[2];
    var name = arguments[3];
    return valid.reduce(function (prev, v) {
      return prev && v(prev, allValues, props, name);
    }, value) && txt || undefined;
  };
};

module.exports = exports["default"];
//# sourceMappingURL=ifValidText.js.map