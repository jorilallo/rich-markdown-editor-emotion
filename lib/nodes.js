"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _Code = require("./components/Code");

var _Code2 = _interopRequireDefault(_Code);

var _BlockToolbar = require("./components/Toolbar/BlockToolbar");

var _BlockToolbar2 = _interopRequireDefault(_BlockToolbar);

var _HorizontalRule = require("./components/HorizontalRule");

var _HorizontalRule2 = _interopRequireDefault(_HorizontalRule);

var _Image = require("./components/Image");

var _Image2 = _interopRequireDefault(_Image);

var _Link = require("./components/Link");

var _Link2 = _interopRequireDefault(_Link);

var _ListItem = require("./components/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _TodoList = require("./components/TodoList");

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Heading = require("./components/Heading");

var _Paragraph = require("./components/Paragraph");

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function renderNode(props) {
  var attributes = props.attributes;


  switch (props.node.type) {
    case "paragraph":
      return React.createElement(_Paragraph2.default, props);
    case "block-toolbar":
      return React.createElement(_BlockToolbar2.default, props);
    case "block-quote":
      return React.createElement(
        "blockquote",
        attributes,
        props.children
      );
    case "bulleted-list":
      return React.createElement(
        "ul",
        attributes,
        props.children
      );
    case "ordered-list":
      return React.createElement(
        "ol",
        attributes,
        props.children
      );
    case "todo-list":
      return React.createElement(
        _TodoList2.default,
        attributes,
        props.children
      );
    case "table":
      return React.createElement(
        "table",
        attributes,
        props.children
      );
    case "table-row":
      return React.createElement(
        "tr",
        attributes,
        props.children
      );
    case "table-head":
      return React.createElement(
        "th",
        attributes,
        props.children
      );
    case "table-cell":
      return React.createElement(
        "td",
        attributes,
        props.children
      );
    case "list-item":
      return React.createElement(_ListItem2.default, props);
    case "horizontal-rule":
      return React.createElement(_HorizontalRule2.default, props);
    case "code":
      return React.createElement(_Code2.default, props);
    case "code-line":
      return React.createElement(
        "pre",
        attributes,
        props.children
      );
    case "image":
      return React.createElement(_Image2.default, props);
    case "link":
      return React.createElement(_Link2.default, props);
    case "heading1":
      return React.createElement(_Heading.Heading1, props);
    case "heading2":
      return React.createElement(_Heading.Heading2, props);
    case "heading3":
      return React.createElement(_Heading.Heading3, props);
    case "heading4":
      return React.createElement(_Heading.Heading4, props);
    case "heading5":
      return React.createElement(_Heading.Heading5, props);
    case "heading6":
      return React.createElement(_Heading.Heading6, props);
    default:
  }
}

exports.default = renderNode;