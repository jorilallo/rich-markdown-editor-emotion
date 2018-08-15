"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Link;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Link(_ref) {
  var attributes = _ref.attributes,
      node = _ref.node,
      children = _ref.children,
      editor = _ref.editor,
      readOnly = _ref.readOnly;

  var href = node.data.get("href");

  return React.createElement(
    "a",
    _extends({}, attributes, {
      href: readOnly ? href : undefined,
      onClick: readOnly ? function (ev) {
        if (editor.props.onClickLink) {
          ev.preventDefault();
          editor.props.onClickLink(href);
        }
      } : undefined,
      target: "_blank"
    }),
    children
  );
}