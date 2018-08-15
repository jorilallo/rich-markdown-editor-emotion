"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactDom = require("react-dom");

var _reactKeydown = require("react-keydown");

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotionTheming = require("emotion-theming");

var _outlineIcons = require("outline-icons");

var _getDataTransferFiles = require("../../lib/getDataTransferFiles");

var _getDataTransferFiles2 = _interopRequireDefault(_getDataTransferFiles);

var _Flex = require("../Flex");

var _Flex2 = _interopRequireDefault(_Flex);

var _animations = require("../../animations");

var _changes = require("../../changes");

var _ToolbarButton = require("./ToolbarButton");

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var BlockToolbar = (_dec = (0, _reactKeydown2.default)("esc"), (_class = function (_React$Component) {
  _inherits(BlockToolbar, _React$Component);

  function BlockToolbar() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, BlockToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockToolbar.__proto__ || Object.getPrototypeOf(BlockToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleOutsideMouseClick = function (ev) {
      var element = (0, _reactDom.findDOMNode)(_this.bar);

      if (!element || ev.target instanceof Node && element.contains(ev.target) || ev.button && ev.button !== 0) {
        return;
      }
      _this.removeSelf(ev);
    }, _this.insertBlock = function (options) {
      var cursorPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "on";
      var editor = _this.props.editor;


      editor.change(function (change) {
        change.collapseToEndOf(_this.props.node).call(_changes.splitAndInsertBlock, options).removeNodeByKey(_this.props.node.key).collapseToEnd();

        if (cursorPosition === "before") change.collapseToStartOfPreviousBlock();
        if (cursorPosition === "after") change.collapseToStartOfNextBlock();
        return change.focus();
      });
    }, _this.handleClickBlock = function (ev, type) {
      ev.preventDefault();

      switch (type) {
        case "heading1":
        case "heading2":
        case "block-quote":
        case "code":
          return _this.insertBlock({ type: type });
        case "horizontal-rule":
          return _this.insertBlock({
            type: { type: "horizontal-rule", isVoid: true }
          }, "after");
        case "bulleted-list":
          return _this.insertBlock({
            type: "list-item",
            wrapper: "bulleted-list"
          });
        case "ordered-list":
          return _this.insertBlock({
            type: "list-item",
            wrapper: "ordered-list"
          });
        case "todo-list":
          return _this.insertBlock({
            type: { type: "list-item", data: { checked: false } },
            wrapper: "todo-list"
          });
        case "image":
          return _this.onPickImage();
        default:
      }
    }, _this.onPickImage = function () {
      // simulate a click on the file upload input element
      _this.file.click();
    }, _this.onImagePicked = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ev) {
        var files, editor, _loop, i;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = (0, _getDataTransferFiles2.default)(ev);
                editor = _this.props.editor;

                _loop = function _loop(i) {
                  var file = files[i];
                  editor.change(function (change) {
                    return change.call(_changes.insertImageFile, file, editor);
                  });
                };

                for (i = 0; i < files.length; i++) {
                  _loop(i);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderBlockButton = function (type, IconClass) {
      return React.createElement(
        _ToolbarButton2.default,
        { onMouseDown: function onMouseDown(ev) {
            return _this.handleClickBlock(ev, type);
          } },
        React.createElement(IconClass, { color: _this.props.theme.blockToolbarItem })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BlockToolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this.handleOutsideMouseClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.handleOutsideMouseClick);
    }
  }, {
    key: "removeSelf",
    value: function removeSelf(ev) {
      var _this3 = this;

      ev.preventDefault();
      ev.stopPropagation();

      this.props.editor.change(function (change) {
        return change.setNodeByKey(_this3.props.node.key, {
          type: "paragraph",
          text: "",
          isVoid: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          editor = _props.editor,
          attributes = _props.attributes,
          node = _props.node;

      var hasImageUpload = !!editor.props.uploadImage;

      var active = editor.value.isFocused && editor.value.selection.hasEdgeIn(node);

      return React.createElement(
        Bar,
        _extends({ active: active }, attributes, { ref: function ref(_ref3) {
            return _this4.bar = _ref3;
          } }),
        React.createElement(HiddenInput, {
          type: "file",
          innerRef: function innerRef(ref) {
            return _this4.file = ref;
          },
          onChange: this.onImagePicked,
          accept: "image/*"
        }),
        this.renderBlockButton("heading1", _outlineIcons.Heading1Icon),
        this.renderBlockButton("heading2", _outlineIcons.Heading2Icon),
        React.createElement(Separator, null),
        this.renderBlockButton("bulleted-list", _outlineIcons.BulletedListIcon),
        this.renderBlockButton("ordered-list", _outlineIcons.OrderedListIcon),
        this.renderBlockButton("todo-list", _outlineIcons.TodoListIcon),
        React.createElement(Separator, null),
        this.renderBlockButton("block-quote", _outlineIcons.BlockQuoteIcon),
        this.renderBlockButton("code", _outlineIcons.CodeIcon),
        this.renderBlockButton("horizontal-rule", _outlineIcons.HorizontalRuleIcon),
        hasImageUpload && this.renderBlockButton("image", _outlineIcons.ImageIcon)
      );
    }
  }]);

  return BlockToolbar;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, "removeSelf", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "removeSelf"), _class.prototype)), _class));


var Separator = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "e11ydtcl0"
})("height:100%;width:1px;background:rgba(0,0,0,0.1);display:inline-block;margin-left:10px;");

var Bar = /*#__PURE__*/(0, _reactEmotion2.default)(_Flex2.default, {
  target: "e11ydtcl1"
})("z-index:100;animation:", _animations.fadeIn, " 150ms ease-in-out;position:relative;align-items:center;background:", function (props) {
  return props.theme.blockToolbarBackground;
}, ";height:44px;&:before,&:after{content:\"\";position:absolute;left:-100%;width:100%;height:44px;background:", function (props) {
  return props.theme.blockToolbarBackground;
}, ";}&:after{left:auto;right:-100%;}@media print{display:none;}");

var HiddenInput = /*#__PURE__*/(0, _reactEmotion2.default)("input", {
  target: "e11ydtcl2"
})("position:absolute;top:-100px;left:-100px;visibility:hidden;");

exports.default = (0, _emotionTheming.withTheme)(BlockToolbar);