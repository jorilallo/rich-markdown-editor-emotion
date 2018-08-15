"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ListItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TodoItem = require("./TodoItem");

var _TodoItem2 = _interopRequireDefault(_TodoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ListItem(_ref) {
  var children = _ref.children,
      node = _ref.node,
      attributes = _ref.attributes,
      props = _objectWithoutProperties(_ref, ["children", "node", "attributes"]);

  var checked = node.data.get("checked");

  if (checked !== undefined) {
    return _react2.default.createElement(
      _TodoItem2.default,
      _extends({ node: node, attributes: attributes }, props),
      children
    );
  }
  return _react2.default.createElement(
    "li",
    attributes,
    children
  );
}