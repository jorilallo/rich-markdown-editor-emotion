"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _slateReact = require("slate-react");

var _slate = require("slate");

var _immutable = require("immutable");

var _headingToSlug = require("../lib/headingToSlug");

var _headingToSlug2 = _interopRequireDefault(_headingToSlug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contents = function (_React$Component) {
  _inherits(Contents, _React$Component);

  function Contents() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Contents);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Contents.__proto__ || Object.getPrototypeOf(Contents)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeHeading: undefined
    }, _this.updateActiveHeading = function () {
      var elements = _this.getHeadingElements();
      if (!elements.length) return;

      var activeHeading = elements[0].id;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          var bounds = element.getBoundingClientRect();
          if (bounds.top <= 0) activeHeading = element.id;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (_this.state.activeHeading !== activeHeading) {
        _this.setState({ activeHeading: activeHeading });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.updateActiveHeading);
      this.updateActiveHeading();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.updateActiveHeading);
    }
  }, {
    key: "getHeadingElements",
    value: function getHeadingElements() {
      var elements = [];
      var tagNames = ["h1", "h2", "h3", "h4", "h5", "h6"];

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = tagNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tagName = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = document.getElementsByTagName(tagName)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var ele = _step3.value;

              elements.push(ele);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return elements;
    }
  }, {
    key: "getHeadings",
    value: function getHeadings() {
      var editor = this.props.editor;


      return editor.value.document.nodes.filter(function (node) {
        if (!node.text) return false;
        return node.type.match(/^heading/);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var editor = this.props.editor;

      var headings = this.getHeadings();

      // If there are one or less headings in the document no need for a minimap
      if (headings.size <= 1) return null;

      return React.createElement(
        Wrapper,
        null,
        React.createElement(
          Sections,
          null,
          headings.map(function (heading) {
            var slug = (0, _headingToSlug2.default)(editor.value.document, heading);
            var active = _this2.state.activeHeading === slug;

            return React.createElement(
              ListItem,
              { type: heading.type, active: active, key: slug },
              React.createElement(
                Anchor,
                { href: "#" + slug, active: active },
                heading.text
              )
            );
          })
        )
      );
    }
  }]);

  return Contents;
}(React.Component);

var Wrapper = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "epwohyc0"
})("font-family:", function (props) {
  return props.theme.fontFamily;
}, ";font-weight:", function (props) {
  return props.theme.fontWeight;
}, ";font-size:1em;line-height:1.4;position:fixed;right:0;top:150px;z-index:100;@media print{display:none;}");

var Anchor = /*#__PURE__*/(0, _reactEmotion2.default)("a", {
  target: "epwohyc1"
})("color:", function (props) {
  return props.active ? props.theme.text : props.theme.textSecondary;
}, ";font-weight:", function (props) {
  return props.active ? 500 : 400;
}, ";opacity:0;transition:all 100ms ease-in-out;margin-right:-5px;padding:2px 0;pointer-events:none;text-overflow:ellipsis;text-decoration:none;&:hover{color:", function (props) {
  return props.theme.primary;
}, ";}");

var ListItem = /*#__PURE__*/(0, _reactEmotion2.default)("li", {
  target: "epwohyc2"
})("position:relative;margin-left:", function (props) {
  return props.type.match(/heading[12]/) ? "8px" : "16px";
}, ";text-align:right;color:", function (props) {
  return props.theme.textSecondary;
}, ";padding-right:16px;white-space:nowrap;&:after{color:", function (props) {
  return props.active ? props.theme.text : props.theme.textSecondary;
}, ";content:\"", function (props) {
  return props.type.match(/heading[12]/) ? "—" : "–";
}, "\";position:absolute;right:0;}");

var Sections = /*#__PURE__*/(0, _reactEmotion2.default)("ol", {
  target: "epwohyc3"
})("margin:0 0 0 -8px;padding:0;list-style:none;font-size:13px;width:100px;transition-delay:1s;transition:width 100ms ease-in-out;&:hover{width:300px;transition-delay:0s;", Anchor, "{opacity:1;margin-right:0;background:", function (props) {
  return props.theme.background;
}, ";pointer-events:all;}}");

exports.default = Contents;