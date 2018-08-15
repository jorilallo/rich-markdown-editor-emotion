"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HorizontalRule(props) {
  var editor = props.editor,
      node = props.node,
      attributes = props.attributes;

  var active = editor.value.isFocused && editor.value.selection.hasEdgeIn(node);
  return _react2.default.createElement(StyledHr, _extends({ active: active }, attributes));
}

var StyledHr = /*#__PURE__*/(0, _reactEmotion2.default)("hr", {
  target: "e1ytvzhd0"
})("padding-top:0.75em;margin:0;border:0;border-bottom:1px solid ", function (props) {
  return props.active ? props.theme.selected : props.theme.horizontalRule;
}, ";");

exports.default = HorizontalRule;