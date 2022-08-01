"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = exports.searchPost = exports.deletePost = exports.updatePost = exports.likePost = exports.createPost = exports.fetchPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'http://localhost:5000/posts';

var API = _axios["default"].create({
  baseURL: 'http://localhost:5000'
});

var fetchPosts = function fetchPosts() {
  return _axios["default"].get(url);
};

exports.fetchPosts = fetchPosts;

var createPost = function createPost(newPost) {
  return _axios["default"].post(url, newPost);
};

exports.createPost = createPost;

var likePost = function likePost(id) {
  return _axios["default"].patch("".concat(url, "/").concat(id, "/likePost"));
};

exports.likePost = likePost;

var updatePost = function updatePost(id, updatedPost) {
  return _axios["default"].patch("".concat(url, "/").concat(id), updatedPost);
};

exports.updatePost = updatePost;

var deletePost = function deletePost(id) {
  return API["delete"]("/posts/".concat(id));
};

exports.deletePost = deletePost;

var searchPost = function searchPost(searchQuery) {
  return _axios["default"].get("".concat(url, "/search?searchQuery=").concat(searchQuery.search || 'none'));
};

exports.searchPost = searchPost;

var signUp = function signUp(formData) {
  return API.post('/auth/signup', formData);
};

exports.signUp = signUp;

var signIn = function signIn(formData) {
  return API.post('/auth/signin', formData);
};

exports.signIn = signIn;