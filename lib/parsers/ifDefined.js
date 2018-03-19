"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (val, dflt) {
  return function (str) {
    return val === str && dflt || str;
  };
};

module.exports = exports["default"];
//# sourceMappingURL=ifDefined.js.map