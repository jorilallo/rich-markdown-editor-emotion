"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactMediumImageZoom = require("react-medium-image-zoom");

var _reactMediumImageZoom2 = _interopRequireDefault(_reactMediumImageZoom);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasError: false
    }, _this.handleChange = function (ev) {
      var alt = ev.target.value;
      var _this$props = _this.props,
          editor = _this$props.editor,
          node = _this$props.node;

      var data = node.data.toObject();

      editor.change(function (change) {
        return change.setNodeByKey(node.key, { data: _extends({}, data, { alt: alt }) });
      });
    }, _this.handleClick = function (ev) {
      ev.stopPropagation();
    }, _this.handleError = function () {
      _this.setState({ hasError: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          editor = _props.editor,
          node = _props.node,
          readOnly = _props.readOnly;

      var loading = node.data.get("loading");
      var caption = node.data.get("alt") || "";
      var src = node.data.get("src");
      var error = node.data.get("error");
      var active = editor.value.isFocused && editor.value.selection.hasEdgeIn(node);
      var showCaption = !readOnly || caption;

      return React.createElement(
        CenteredImage,
        { contentEditable: false },
        this.state.hasError ? React.createElement(
          React.Fragment,
          null,
          React.createElement(StyledImg, { width: 200, height: 100, active: active }),
          React.createElement(
            Error,
            null,
            "Could not load image."
          )
        ) : React.createElement(
          React.Fragment,
          null,
          React.createElement(HiddenImg, { src: src, onError: this.handleError }),
          !readOnly ? React.createElement(StyledImg, _extends({}, attributes, {
            src: src,
            alt: caption,
            active: active,
            loading: loading
          })) : React.createElement(_reactMediumImageZoom2.default, {
            image: _extends({
              src: src,
              alt: caption,
              style: {
                maxWidth: "100%"
              }
            }, attributes),
            shouldRespectMaxDimension: true
          }),
          showCaption && React.createElement(Caption, {
            type: "text",
            placeholder: "Write a caption",
            onChange: this.handleChange,
            onClick: this.handleClick,
            defaultValue: caption,
            contentEditable: false,
            disabled: readOnly,
            tabIndex: -1
          }),
          error && React.createElement(
            Error,
            null,
            "Sorry, an error occurred uploading the image."
          )
        )
      );
    }
  }]);

  return Image;
}(React.Component);

var HiddenImg = /*#__PURE__*/(0, _reactEmotion2.default)("img", {
  target: "ejf2dth0"
})("display:none;");

var Error = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "ejf2dth1"
})("position:absolute;text-align:center;transform:translate3d(-50%,-50%,0);top:50%;left:50%;background:rgba(255,255,255,0.5);display:block;margin:0 auto;padding:4px 8px;border-radius:4px;font-size:14px;");

var StyledImg = /*#__PURE__*/(0, _reactEmotion2.default)("img", {
  target: "ejf2dth2"
})("max-width:100%;box-shadow:", function (props) {
  return props.active ? "0 0 0 2px " + props.theme.selected : "none";
}, ";border-radius:", function (props) {
  return props.active ? "2px" : "0";
}, ";opacity:", function (props) {
  return props.loading ? 0.5 : 1;
}, ";");

var CenteredImage = /*#__PURE__*/(0, _reactEmotion2.default)("span", {
  target: "ejf2dth3"
})("display:block;text-align:center;position:relative;");

var Caption = /*#__PURE__*/(0, _reactEmotion2.default)("input", {
  target: "ejf2dth4"
})("border:0;display:block;font-size:13px;font-style:italic;color:", function (props) {
  return props.theme.textSecondary;
}, ";padding:2px 0;line-height:16px;text-align:center;width:100%;outline:none;background:none;&::placeholder{color:", function (props) {
  return props.theme.placeholder;
}, ";}");

exports.default = Image;