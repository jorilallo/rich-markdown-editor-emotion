"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MarkdownShortcuts;

var _slate = require("slate");

var inlineShortcuts = [{ mark: "bold", shortcut: "**" }, { mark: "bold", shortcut: "__" }, { mark: "italic", shortcut: "*" }, { mark: "italic", shortcut: "_" }, { mark: "code", shortcut: "`" }, { mark: "added", shortcut: "++" }, { mark: "deleted", shortcut: "~~" }];
function MarkdownShortcuts() {
  return {
    onKeyDown: function onKeyDown(ev, change) {
      var value = change.value;
      var startBlock = value.startBlock;

      if (!startBlock) return null;

      // markdown shortcuts should not be parsed in code
      if (startBlock.type.match(/code/)) return null;

      switch (ev.key) {
        case "-":
          return this.onDash(ev, change);
        case "`":
          return this.onBacktick(ev, change);
        case " ":
          return this.onSpace(ev, change);
        case "Backspace":
          return this.onBackspace(ev, change);
        default:
          return null;
      }
    },


    /**
     * On space, if it was after an auto-markdown shortcut, convert the current
     * node into the shortcut's corresponding type.
     */
    onSpace: function onSpace(ev, change) {
      var value = change.value;

      if (value.isExpanded) return;
      var startBlock = value.startBlock,
          startOffset = value.startOffset;


      var chars = startBlock.text.slice(0, startOffset).trim();
      var type = this.getType(chars);

      if (type) {
        if (type === "list-item" && startBlock.type === "list-item") return;
        ev.preventDefault();

        var checked = void 0;
        if (chars === "[x]") checked = true;
        if (chars === "[ ]") checked = false;

        change.extendToStartOf(startBlock).delete().setBlocks({
          type: type,
          data: { checked: checked }
        }, { normalize: false });

        if (type === "list-item") {
          if (checked !== undefined) {
            change.wrapBlock("todo-list");
          } else if (chars === "1.") {
            change.wrapBlock("ordered-list");
          } else {
            change.wrapBlock("bulleted-list");
          }
        }

        return true;
      }

      // no inline shortcuts should work in headings
      if (startBlock.type.match(/heading/)) return null;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = inlineShortcuts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          // find all inline characters
          var mark = key.mark,
              shortcut = key.shortcut;

          var inlineTags = [];

          // only add tags if they have spaces around them or the tag is beginning
          // or the end of the block
          for (var i = 0; i < startBlock.text.length; i++) {
            var text = startBlock.text;

            var start = i;
            var end = i + shortcut.length;
            var beginningOfBlock = start === 0;
            var endOfBlock = end === text.length;
            var surroundedByWhitespaces = [text.slice(start - 1, start), text.slice(end, end + 1)].includes(" ");

            if (text.slice(start, end) === shortcut && (beginningOfBlock || endOfBlock || surroundedByWhitespaces)) {
              inlineTags.push(i);
            }
          }

          // if we have multiple tags then mark the text between
          if (inlineTags.length > 1) {
            var firstText = startBlock.getFirstText();
            var firstCodeTagIndex = inlineTags[0];
            var lastCodeTagIndex = inlineTags[inlineTags.length - 1];
            return change.removeTextByKey(firstText.key, lastCodeTagIndex, shortcut.length).removeTextByKey(firstText.key, firstCodeTagIndex, shortcut.length).moveOffsetsTo(firstCodeTagIndex, lastCodeTagIndex - shortcut.length).addMark(mark).collapseToEnd().removeMark(mark);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    onDash: function onDash(ev, change) {
      var value = change.value;

      if (value.isExpanded) return;
      var startBlock = value.startBlock,
          startOffset = value.startOffset;

      if (startBlock.type.match(/heading/)) return null;

      var chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, "");

      if (chars === "--") {
        ev.preventDefault();
        return change.extendToStartOf(startBlock).delete().setBlocks({
          type: "horizontal-rule",
          isVoid: true
        }, { normalize: false }).insertBlock("paragraph").collapseToStart();
      }
    },
    onBacktick: function onBacktick(ev, change) {
      var value = change.value;

      if (value.isExpanded) return;
      var startBlock = value.startBlock,
          startOffset = value.startOffset;

      if (startBlock.type.match(/heading/)) return null;

      var chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, "");

      if (chars === "``") {
        ev.preventDefault();
        return change.extendToStartOf(startBlock).delete().setBlocks({ type: "code" });
      }
    },
    onBackspace: function onBackspace(ev, change) {
      var value = change.value;

      if (value.isExpanded) return;
      var startBlock = value.startBlock,
          selection = value.selection,
          startOffset = value.startOffset;

      // If at the start of a non-paragraph, convert it back into a paragraph

      if (startOffset === 0) {
        if (startBlock.type === "paragraph") return;
        ev.preventDefault();

        change.setBlocks("paragraph");

        if (startBlock.type === "list-item") {
          change.unwrapBlock("bulleted-list");
        }

        return change;
      }

      // If at the end of a code mark hitting backspace should remove the mark
      if (selection.isCollapsed) {
        var marksAtCursor = startBlock.getMarksAtRange(selection);
        var codeMarksAtCursor = marksAtCursor.filter(function (mark) {
          return mark.type === "code";
        });

        if (codeMarksAtCursor.size > 0) {
          ev.preventDefault();

          var textNode = startBlock.getTextAtOffset(startOffset);
          var charsInCodeBlock = textNode.characters.takeUntil(function (v, k) {
            return k === startOffset;
          }).reverse().takeUntil(function (v, k) {
            return !v.marks.some(function (mark) {
              return mark.type === "code";
            });
          });

          change.removeMarkByKey(textNode.key, startOffset - charsInCodeBlock.size, startOffset, "code");
        }
      }
    },


    /**
     * Get the block type for a series of auto-markdown shortcut `chars`.
     */
    getType: function getType(chars) {
      switch (chars) {
        case "*":
        case "-":
        case "+":
        case "1.":
        case "[ ]":
        case "[x]":
          return "list-item";
        case ">":
          return "block-quote";
        case "#":
          return "heading1";
        case "##":
          return "heading2";
        case "###":
          return "heading3";
        case "####":
          return "heading4";
        case "#####":
          return "heading5";
        case "######":
          return "heading6";
        default:
          return null;
      }
    }
  };
}