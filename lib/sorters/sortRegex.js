'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortRegex = function sortRegex(rgx) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var func = arguments[3];
  return function () {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

    var matched = function matched(val) {
      var matches = val.match(rgx);
      var sliced = max && matches.slice(min, max) || matches.slice(min);
      return func && func(sliced) || sliced;
    };
    return (0, _sortBy2.default)(arr, matched, order);
  };
};

exports.default = sortRegex;
module.exports = exports['default'];
//# sourceMappingURL=sortRegex.js.map