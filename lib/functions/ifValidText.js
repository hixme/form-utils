"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (txt, valid) {
  return function (value, allValues, props, name) {
    return valid.some(function (v) {
      return v(value, allValues, props, name);
    }) && txt || undefined;
  };
};

module.exports = exports["default"];
//# sourceMappingURL=ifValidText.js.map