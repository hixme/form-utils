"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (int) {
  return function (str) {
    return str && str.length > int && str.slice(0, int) || str;
  };
};

module.exports = exports["default"];
//# sourceMappingURL=strFixed.js.map