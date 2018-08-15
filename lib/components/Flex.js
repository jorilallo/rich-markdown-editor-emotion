"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Flex = function Flex(props) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, ["children"]);

  return React.createElement(
    Container,
    restProps,
    children
  );
};

var Container = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "ee8ln630"
})("display:flex;flex:", function (_ref) {
  var auto = _ref.auto;
  return auto ? "1 1 auto" : "initial";
}, ";flex-direction:", function (_ref2) {
  var column = _ref2.column;
  return column ? "column" : "row";
}, ";align-items:", function (_ref3) {
  var align = _ref3.align;
  return align;
}, ";justify-content:", function (_ref4) {
  var justify = _ref4.justify;
  return justify;
}, ";");

exports.default = Flex;