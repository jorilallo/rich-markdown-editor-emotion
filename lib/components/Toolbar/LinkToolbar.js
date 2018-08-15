"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactDom = require("react-dom");

var _slate = require("slate");

var _slateReact = require("slate-react");

var _build = require("boundless-arrow-key-navigation/build");

var _build2 = _interopRequireDefault(_build);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotionTheming = require("emotion-theming");

var _reactKeydown = require("react-keydown");

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

var _outlineIcons = require("outline-icons");

var _Flex = require("../Flex");

var _Flex2 = _interopRequireDefault(_Flex);

var _LinkSearchResult = require("./LinkSearchResult");

var _LinkSearchResult2 = _interopRequireDefault(_LinkSearchResult);

var _ToolbarButton = require("./ToolbarButton");

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkToolbar = (0, _reactKeydown2.default)(_class = function (_React$Component) {
  _inherits(LinkToolbar, _React$Component);

  function LinkToolbar() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkToolbar.__proto__ || Object.getPrototypeOf(LinkToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.originalValue = "", _this.state = {
      isEditing: false,
      isFetching: false,
      results: []
    }, _this.handleOutsideMouseClick = function (ev) {
      // check if we're clicking inside the link toolbar
      var element = (0, _reactDom.findDOMNode)(_this.wrapper);
      if (!element || ev.target instanceof HTMLElement && element.contains(ev.target) || ev.button && ev.button !== 0) {
        return;
      }

      // check if we're clicking inside the link text
      try {
        var linkElement = (0, _slateReact.findDOMNode)(_this.props.link);

        if (!linkElement || ev.target instanceof HTMLElement && linkElement.contains(ev.target) || ev.button && ev.button !== 0) {
          return;
        }
      } catch (err) {}
      // errors finding dom node result in toolbar closing


      // otherwise, we're clicking outside
      ev.preventDefault();
      _this.save(_this.input.value);
    }, _this.search = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term) {
        var editor, _results;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                editor = _this.props.editor;

                if (editor.props.onSearchLink) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:

                _this.setState({ isFetching: true });

                if (!term) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return editor.props.onSearchLink(term);

              case 8:
                _results = _context.sent;

                _this.setState({ results: _results });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);

                console.error(_context.t0);

              case 15:
                _context.next = 18;
                break;

              case 17:
                _this.setState({ results: [] });

              case 18:

                _this.setState({ isFetching: false });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.selectSearchResult = function (ev, url) {
      ev.preventDefault();
      _this.save(url);
    }, _this.cancel = function () {
      _this.save(_this.originalValue);
    }, _this.onKeyDown = function (ev) {
      switch (ev.key) {
        case "Enter":
          ev.preventDefault();
          if (!(ev.target instanceof HTMLInputElement)) return;
          return _this.save(ev.target.value);
        case "Escape":
          ev.preventDefault();
          ev.stopPropagation();
          return _this.cancel();
        case "ArrowDown":
          ev.preventDefault();
          if (_this.firstDocument) {
            var element = (0, _reactDom.findDOMNode)(_this.firstDocument);
            if (element instanceof HTMLElement) element.focus();
          }
          break;
        default:
      }
    }, _this.onChange = function (ev) {
      if (!_this.props.editor.props.onSearchLink) return;

      try {
        new URL(ev.target.value);
      } catch (err) {
        // this is not a valid url, show search suggestions
        _this.search(ev.target.value);
        return;
      }
      _this.setState({ results: [] });
    }, _this.onResultKeyDown = function (ev) {
      if (ev.key === "Escape") {
        ev.preventDefault();
        ev.stopPropagation();
        _this.cancel();
      }
    }, _this.removeLink = function () {
      _this.save("");
    }, _this.openLink = function () {
      var href = _this.props.link.data.get("href");
      window.open(href, "_blank");
    }, _this.save = function (href) {
      var _this$props = _this.props,
          editor = _this$props.editor,
          link = _this$props.link;

      href = href.trim();

      editor.change(function (change) {
        if (href) {
          change.setNodeByKey(link.key, { type: "link", data: { href: href } });
        } else if (link) {
          change.unwrapInlineByKey(link.key);
        }
        change.deselect();
        _this.props.onBlur();
      });
    }, _this.setFirstResultRef = function (ref) {
      _this.firstDocument = ref;
    }, _this.setWrapperRef = function (ref) {
      _this.wrapper = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkToolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.originalValue = this.props.link.data.get("href");
      this.setState({ isEditing: !!this.originalValue });

      setImmediate(function () {
        return window.addEventListener("click", _this3.handleOutsideMouseClick);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.handleOutsideMouseClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var href = this.props.link.data.get("href");
      var hasResults = this.state.results.length > 0;

      return React.createElement(
        "span",
        { ref: this.setWrapperRef },
        React.createElement(
          LinkEditor,
          null,
          React.createElement(Input, {
            innerRef: function innerRef(ref) {
              return _this4.input = ref;
            },
            defaultValue: href,
            placeholder: "Search or paste a link\u2026",
            onKeyDown: this.onKeyDown,
            onChange: this.onChange,
            autoFocus: href === ""
          }),
          this.state.isEditing && React.createElement(
            _ToolbarButton2.default,
            { onMouseDown: this.openLink },
            React.createElement(_outlineIcons.OpenIcon, { color: this.props.theme.toolbarItem })
          ),
          React.createElement(
            _ToolbarButton2.default,
            { onMouseDown: this.removeLink },
            this.state.isEditing ? React.createElement(_outlineIcons.TrashIcon, { color: this.props.theme.toolbarItem }) : React.createElement(_outlineIcons.CloseIcon, { color: this.props.theme.toolbarItem })
          )
        ),
        hasResults && React.createElement(
          SearchResults,
          null,
          React.createElement(
            _build2.default,
            {
              mode: _build2.default.mode.VERTICAL,
              defaultActiveChildIndex: 0
            },
            this.state.results.map(function (result, index) {
              return React.createElement(_LinkSearchResult2.default, {
                innerRef: function innerRef(ref) {
                  return index === 0 && _this4.setFirstResultRef(ref);
                },
                title: result.title,
                key: result.url,
                onClick: function onClick(ev) {
                  return _this4.selectSearchResult(ev, result.url);
                },
                onKeyDown: _this4.onResultKeyDown
              });
            })
          )
        )
      );
    }
  }]);

  return LinkToolbar;
}(React.Component)) || _class;

var SearchResults = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "ej2d2q0"
})("background:", function (props) {
  return props.theme.toolbarBackground;
}, ";position:absolute;top:100%;width:100%;height:auto;left:0;padding:8px;margin-top:-3px;margin-bottom:0;border-radius:0 0 4px 4px;");

var LinkEditor = /*#__PURE__*/(0, _reactEmotion2.default)(_Flex2.default, {
  target: "ej2d2q1"
})("margin-left:-8px;margin-right:-8px;");

var Input = /*#__PURE__*/(0, _reactEmotion2.default)("input", {
  target: "ej2d2q2"
})("font-size:15px;background:", function (props) {
  return props.theme.toolbarInput;
}, ";color:", function (props) {
  return props.theme.toolbarItem;
}, ";border-radius:2px;padding:4px 8px;border:0;margin:0;outline:none;flex-grow:1;");

exports.default = (0, _emotionTheming.withTheme)(LinkToolbar);