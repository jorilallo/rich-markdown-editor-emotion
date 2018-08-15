"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slateDropOrPasteImages = require("@tommoor/slate-drop-or-paste-images");

var _slateDropOrPasteImages2 = _interopRequireDefault(_slateDropOrPasteImages);

var _slatePasteLinkify = require("slate-paste-linkify");

var _slatePasteLinkify2 = _interopRequireDefault(_slatePasteLinkify);

var _slateCollapseOnEscape = require("slate-collapse-on-escape");

var _slateCollapseOnEscape2 = _interopRequireDefault(_slateCollapseOnEscape);

var _slateTrailingBlock = require("slate-trailing-block");

var _slateTrailingBlock2 = _interopRequireDefault(_slateTrailingBlock);

var _slateEditCode = require("slate-edit-code");

var _slateEditCode2 = _interopRequireDefault(_slateEditCode);

var _slatePrism = require("slate-prism");

var _slatePrism2 = _interopRequireDefault(_slatePrism);

var _EditList = require("./plugins/EditList");

var _EditList2 = _interopRequireDefault(_EditList);

var _KeyboardShortcuts = require("./plugins/KeyboardShortcuts");

var _KeyboardShortcuts2 = _interopRequireDefault(_KeyboardShortcuts);

var _MarkdownShortcuts = require("./plugins/MarkdownShortcuts");

var _MarkdownShortcuts2 = _interopRequireDefault(_MarkdownShortcuts);

var _MarkdownPaste = require("./plugins/MarkdownPaste");

var _MarkdownPaste2 = _interopRequireDefault(_MarkdownPaste);

var _Ellipsis = require("./plugins/Ellipsis");

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _changes = require("./changes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createPlugins = function createPlugins() {
  return [(0, _slatePasteLinkify2.default)({
    type: "link",
    collapseTo: "end"
  }), (0, _slateDropOrPasteImages2.default)({
    extensions: ["png", "jpg", "gif", "webp"],
    insertImage: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(change, file, editor) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", change.call(_changes.insertImageFile, file, editor));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function insertImage(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }), _EditList2.default, (0, _slateEditCode2.default)({
    containerType: "code",
    lineType: "code-line",
    exitBlocktype: "paragraph",
    allowMarks: false,
    selectAll: true
  }), (0, _slatePrism2.default)({
    onlyIn: function onlyIn(node) {
      return node.type === "code";
    },
    getSyntax: function getSyntax(node) {
      return "javascript";
    }
  }), (0, _slateCollapseOnEscape2.default)({ toEdge: "end" }), (0, _KeyboardShortcuts2.default)(), (0, _MarkdownShortcuts2.default)(), (0, _MarkdownPaste2.default)(), (0, _Ellipsis2.default)(), (0, _slateTrailingBlock2.default)({ type: "paragraph" })];
};

exports.default = createPlugins;