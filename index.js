"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regexTags = /<[^>]*(>)|&nbsp;/g;
var _regexSpaces = /\s\s+/g;

var parse = function parse(text) {
  return text.replace(_regexTags, " ").replace(_regexSpaces, " ");
};

var _default = parse;
exports.default = _default;
