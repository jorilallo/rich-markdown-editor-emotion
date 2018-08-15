"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Code;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _CopyButton = require("./CopyButton");

var _CopyButton2 = _interopRequireDefault(_CopyButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getCopyText(node) {
  return node.nodes.reduce(function (memo, line) {
    return "" + memo + line.text + "\n";
  }, "");
}

function Code(_ref) {
  var children = _ref.children,
      node = _ref.node,
      readOnly = _ref.readOnly,
      attributes = _ref.attributes;

  // TODO: There is a currently a bug in slate-prism that prevents code elements
  // with a language class name from formatting correctly on first load.
  // const language = node.data.get('language') || 'javascript';

  return React.createElement(
    Container,
    _extends({}, attributes, { spellCheck: false }),
    readOnly && React.createElement(_CopyButton2.default, { text: getCopyText(node) }),
    React.createElement(
      "code",
      null,
      children
    )
  );
}

var Container = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "e1gmb18t0"
})("position:relative;background:", function (props) {
  return props.theme.codeBackground;
}, ";border-radius:4px;border:1px solid ", function (props) {
  return props.theme.codeBorder;
}, ";code{display:block;overflow-x:scroll;padding:0.5em 1em;line-height:1.4em;}pre{margin:0;}&:hover{> span{opacity:1;}}");