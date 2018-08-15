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

var Code = function Code(props) {
  return _react2.default.createElement("code", _extends({ spellCheck: false }, props));
};

var InlineCode = /*#__PURE__*/(0, _reactEmotion2.default)(Code, {
  target: "e1jp1ghl0"
})("padding:0.15em;background:", function (props) {
  return props.theme.codeBackground;
}, ";border-radius:4px;border:1px solid ", function (props) {
  return props.theme.codeBorder;
}, ";");

exports.default = InlineCode;