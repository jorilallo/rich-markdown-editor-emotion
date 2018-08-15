"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function (_React$Component) {
  _inherits(TodoItem, _React$Component);

  function TodoItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodoItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (ev) {
      var checked = ev.target.checked;
      var _this$props = _this.props,
          editor = _this$props.editor,
          node = _this$props.node;

      editor.change(function (change) {
        return change.setNodeByKey(node.key, { data: { checked: checked } });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodoItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          node = _props.node,
          attributes = _props.attributes,
          readOnly = _props.readOnly;

      var checked = node.data.get("checked");

      return React.createElement(
        ListItem,
        _extends({ checked: checked }, attributes),
        React.createElement(
          "span",
          { contentEditable: false },
          React.createElement(Input, {
            type: "checkbox",
            checked: checked,
            onChange: this.handleChange,
            disabled: readOnly
          })
        ),
        children
      );
    }
  }]);

  return TodoItem;
}(React.Component);

exports.default = TodoItem;


var ListItem = /*#__PURE__*/(0, _reactEmotion2.default)("li", {
  target: "e1wg4g120"
})("padding-left:1.4em;position:relative;> p > span{color:", function (props) {
  return props.checked ? props.theme.textSecondary : "inherit";
}, ";text-decoration:", function (props) {
  return props.checked ? "line-through" : "none";
}, ";}");

var Input = /*#__PURE__*/(0, _reactEmotion2.default)("input", {
  target: "e1wg4g121"
})("position:absolute;left:0;top:0.4em;");