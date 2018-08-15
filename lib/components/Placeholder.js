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

var Span = function Span(props) {
  return _react2.default.createElement("span", _extends({ contentEditable: false }, props));
};

exports.default = /*#__PURE__*/(0, _reactEmotion2.default)(Span, {
  target: "ealtl7v0"
})("display:inline-block;width:0;white-space:nowrap;float:left;pointer-events:none;user-select:none;color:", function (props) {
  return props.theme.placeholder;
}, ";");