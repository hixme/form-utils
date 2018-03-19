"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (txt, valid) {
  return function (value, allValues, props, name) {
    return valid.reduce(function (prev, v) {
      return prev && v(prev, allValues, props, name);
    }, value) && txt || undefined;
  };
};

module.exports = exports["default"];
//# sourceMappingURL=ifValidText.js.map