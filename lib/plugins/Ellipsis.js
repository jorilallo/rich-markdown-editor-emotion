"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ellipsis;

var _slate = require("slate");

var _isModKey = require("../lib/isModKey");

var _isModKey2 = _interopRequireDefault(_isModKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ellipsis() {
  return {
    onKeyDown: function onKeyDown(ev, change) {
      if (!(0, _isModKey2.default)(ev) && ev.key === " ") {
        return this.onSpace(ev, change);
      }

      return null;
    },
    onSpace: function onSpace(ev, change) {
      var value = change.value;

      if (value.isExpanded) return;

      var startBlock = value.startBlock;

      if (startBlock.type.match(/code/)) return;

      var startOffset = value.startOffset - 3;
      var textNode = startBlock.getFirstText();
      if (!textNode) return;

      var chars = textNode.text.slice(startOffset, startOffset + 3);

      // replaces three periods with the proper ellipsis character.
      if (chars === "...") {
        return change.removeTextByKey(textNode.key, startOffset, 3).insertTextByKey(textNode.key, startOffset, "…");
      }
    }
  };
}