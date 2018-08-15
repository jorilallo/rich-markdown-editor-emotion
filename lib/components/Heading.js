"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading6 = exports.Heading5 = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.StyledHeading = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _slate = require("slate");

var _headingToSlug = require("../lib/headingToSlug");

var _headingToSlug2 = _interopRequireDefault(_headingToSlug);

var _Placeholder = require("./Placeholder");

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _CopyToClipboard = require("./CopyToClipboard");

var _CopyToClipboard2 = _interopRequireDefault(_CopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Heading(props) {
  var parent = props.parent,
      placeholder = props.placeholder,
      node = props.node,
      editor = props.editor,
      readOnly = props.readOnly,
      children = props.children,
      _props$component = props.component,
      component = _props$component === undefined ? "h1" : _props$component,
      className = props.className,
      attributes = props.attributes;

  var parentIsDocument = parent instanceof _slate.Document;
  var firstHeading = parentIsDocument && parent.nodes.first() === node;
  var showPlaceholder = placeholder && firstHeading && !node.text;
  var slugish = (0, _headingToSlug2.default)(editor.value.document, node);
  var showHash = readOnly && !!slugish;
  var Component = component;
  var pretitle = editor.props.pretitle || "";
  var title = node.text.trim();
  var startsWithPretitleAndSpace = pretitle && title.match(new RegExp("^" + pretitle + "\\s"));
  var linkToHeading = "" + window.location.origin + window.location.pathname + "#" + slugish;

  return React.createElement(
    Component,
    _extends({}, attributes, { className: className }),
    React.createElement(HiddenAnchor, { id: slugish }),
    React.createElement(
      Wrapper,
      { hasPretitle: startsWithPretitleAndSpace },
      children
    ),
    showPlaceholder && React.createElement(
      _Placeholder2.default,
      { contentEditable: false },
      editor.props.titlePlaceholder
    ),
    showHash && React.createElement(
      Anchor,
      {
        name: slugish,
        onCopy: function onCopy() {
          return editor.props.onShowToast && editor.props.onShowToast("Link copied to clipboard");
        },
        text: linkToHeading
      },
      React.createElement(
        "span",
        null,
        "#"
      )
    )
  );
}

var Wrapper = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "e1amv1hr0"
})("display:inline;margin-left:", function (props) {
  return props.hasPretitle ? "-1.2em" : 0;
}, ";");

var HiddenAnchor = /*#__PURE__*/(0, _reactEmotion2.default)("a", {
  target: "e1amv1hr1"
})("visibility:hidden;display:block;position:relative;top:-50px;");

var Anchor = /*#__PURE__*/(0, _reactEmotion2.default)(_CopyToClipboard2.default, {
  target: "e1amv1hr2"
})("visibility:hidden;padding-left:0.25em;");

var StyledHeading = /*#__PURE__*/exports.StyledHeading = (0, _reactEmotion2.default)(Heading, {
  target: "e1amv1hr3"
})("position:relative;&:hover{", Anchor, "{color:", function (props) {
  return props.theme.placeholder;
}, ";visibility:visible;text-decoration:none;cursor:pointer;&:hover{color:", function (props) {
  return props.theme.text;
}, ";}}}");
var Heading1 = exports.Heading1 = function Heading1(props) {
  return React.createElement(StyledHeading, _extends({ component: "h1" }, props));
};
var Heading2 = exports.Heading2 = function Heading2(props) {
  return React.createElement(StyledHeading, _extends({ component: "h2" }, props));
};
var Heading3 = exports.Heading3 = function Heading3(props) {
  return React.createElement(StyledHeading, _extends({ component: "h3" }, props));
};
var Heading4 = exports.Heading4 = function Heading4(props) {
  return React.createElement(StyledHeading, _extends({ component: "h4" }, props));
};
var Heading5 = exports.Heading5 = function Heading5(props) {
  return React.createElement(StyledHeading, _extends({ component: "h5" }, props));
};
var Heading6 = exports.Heading6 = function Heading6(props) {
  return React.createElement(StyledHeading, _extends({ component: "h6" }, props));
};