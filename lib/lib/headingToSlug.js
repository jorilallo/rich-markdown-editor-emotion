"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _escape2 = require("lodash/escape");

var _escape3 = _interopRequireDefault(_escape2);

exports.default = headingToSlug;

var _slate = require("slate");

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// finds the index of this heading in the document compared to other headings
// with the same slugified text
function indexOfType(document, heading) {
  var slugified = (0, _escape3.default)((0, _slugify2.default)(heading.text));
  var headings = document.nodes.filter(function (node) {
    if (!node.text) return false;
    return node.type.match(/^heading/) && slugified === (0, _escape3.default)((0, _slugify2.default)(node.text));
  });

  return headings.indexOf(heading);
}

// calculates a unique slug for this heading based on it's text and position
// in the document that is as stable as possible
function headingToSlug(document, node) {
  var slugified = (0, _escape3.default)((0, _slugify2.default)(node.text));
  var index = indexOfType(document, node);
  if (index === 0) return slugified;
  return slugified + "-" + index;
}