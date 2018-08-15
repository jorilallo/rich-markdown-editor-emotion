"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slateEditList = require("slate-edit-list");

var _slateEditList2 = _interopRequireDefault(_slateEditList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _slateEditList2.default)({
  types: ["ordered-list", "bulleted-list", "todo-list"],
  typeItem: "list-item",
  typeDefault: "paragraph"
});