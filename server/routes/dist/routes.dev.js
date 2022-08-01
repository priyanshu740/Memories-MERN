"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _posts = require("../controllers/posts.js");

var _auth = require("../middleware/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = _express["default"].Router();

route.get('/', _posts.getPosts);
route.get('/search', _posts.searchPost);
route.post('/', _posts.createPost);
route.patch('/:id', _auth.authMiddlware, _posts.updatePost);
route.patch('/:id/likePost', _auth.authMiddlware, _posts.likePost);
route["delete"]('/:id', _auth.authMiddlware, _posts.deletePost);
var _default = route;
exports["default"] = _default;