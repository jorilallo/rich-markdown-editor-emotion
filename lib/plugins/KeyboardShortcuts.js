"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeyboardShortcuts;

var _slate = require("slate");

var _isModKey = require("../lib/isModKey");

var _isModKey2 = _interopRequireDefault(_isModKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KeyboardShortcuts() {
  return {
    onKeyDown: function onKeyDown(ev, change) {
      if (!(0, _isModKey2.default)(ev)) {
        switch (ev.key) {
          case "Enter":
            return this.onEnter(ev, change);
          case "Tab":
            return this.onTab(ev, change);
          default:
        }
        return null;
      }

      switch (ev.key) {
        case "b":
          ev.preventDefault();
          return this.toggleMark(change, "bold");
        case "i":
          ev.preventDefault();
          return this.toggleMark(change, "italic");
        case "u":
          ev.preventDefault();
          return this.toggleMark(change, "underlined");
        case "d":
          ev.preventDefault();
          return this.toggleMark(change, "deleted");
        case "k":
          ev.preventDefault();
          return change.wrapInline({ type: "link", data: { href: "" } });
        default:
          return null;
      }
    },
    toggleMark: function toggleMark(change, type) {
      var value = change.value;
      // don't allow formatting of document title

      var firstNode = value.document.nodes.first();
      if (firstNode === value.startBlock) return;

      change.toggleMark(type);
    },


    /**
     * On return, if at the end of a node type that should not be extended,
     * create a new paragraph below it.
     */
    onEnter: function onEnter(ev, change) {
      var value = change.value;

      if (value.isExpanded) return;

      var startBlock = value.startBlock,
          endOffset = value.endOffset;

      // Hitting enter at the end of the line reverts to standard behavior

      if (endOffset === startBlock.length) return;

      // Hitting enter while an image is selected should jump caret below and
      // insert a new paragraph
      if (startBlock.type === "image") {
        ev.preventDefault();
        return change.splitBlock(10).setBlocks({
          type: "paragraph",
          text: "",
          isVoid: false
        });
      }

      // Hitting enter in a heading or blockquote will split the node at that
      // point and make the new node a paragraph
      if (startBlock.type.match(/(heading|block-quote)/) && endOffset > 0) {
        ev.preventDefault();
        return change.splitBlock().setBlocks("paragraph");
      }
    },


    /**
     * On tab, if at the end of the heading jump to the main body content
     * as if it is another input field (act the same as enter).
     */
    onTab: function onTab(ev, change) {
      var value = change.value;


      if (value.startBlock.type === "heading1") {
        ev.preventDefault();
        change.splitBlock().setBlocks("paragraph");
      }
    }
  };
}