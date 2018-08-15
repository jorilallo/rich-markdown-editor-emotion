"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderMark;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _slate = require("slate");

var _InlineCode = require("./components/InlineCode");

var _InlineCode2 = _interopRequireDefault(_InlineCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function renderMark(props) {
  switch (props.mark.type) {
    case "bold":
      return React.createElement(
        "strong",
        null,
        props.children
      );
    case "code":
      return React.createElement(
        _InlineCode2.default,
        null,
        props.children
      );
    case "italic":
      return React.createElement(
        "em",
        null,
        props.children
      );
    case "underlined":
      return React.createElement(
        "u",
        null,
        props.children
      );
    case "deleted":
      return React.createElement(
        "del",
        null,
        props.children
      );
    case "added":
      return React.createElement(
        "mark",
        null,
        props.children
      );
    default:
  }
}