"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _outlineIcons = require("outline-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function LinkSearchResult(_ref) {
  var title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement(
    ListItem,
    _extends({}, rest, { href: "" }),
    React.createElement(
      "i",
      null,
      React.createElement(_outlineIcons.NextIcon, { light: true })
    ),
    title
  );
}

var ListItem = /*#__PURE__*/(0, _reactEmotion2.default)("a", {
  target: "eb7tt5p0"
})("display:flex;align-items:center;height:28px;padding:6px 8px 6px 0;color:", function (props) {
  return props.theme.toolbarItem;
}, ";font-family:", function (props) {
  return props.theme.fontFamily;
}, ";font-size:15px;text-decoration:none;overflow:hidden;white-space:nowrap;i{visibility:hidden;}&:hover,&:focus,&:active{font-weight:500;outline:none;i{visibility:visible;}}");

exports.default = LinkSearchResult;