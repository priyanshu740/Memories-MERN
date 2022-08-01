"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPost = exports["default"] = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.getPosts = void 0;

var _postMessage = _interopRequireDefault(require("../models/postMessage.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var getPosts = function getPosts(req, res) {
  var postMessages;
  return regeneratorRuntime.async(function getPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_postMessage["default"].find());

        case 3:
          postMessages = _context.sent;
          res.status(200).json(postMessages);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getPosts = getPosts;

var createPost = function createPost(req, res) {
  var post, newPostMessage;
  return regeneratorRuntime.async(function createPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          post = req.body;
          newPostMessage = new _postMessage["default"](post);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(newPostMessage.save());

        case 5:
          res.json(newPostMessage);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

exports.createPost = createPost;

var updatePost = function updatePost(req, res) {
  var id, _req$body, title, message, creator, selectedFile, tags, updatedPost;

  return regeneratorRuntime.async(function updatePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body = req.body, title = _req$body.title, message = _req$body.message, creator = _req$body.creator, selectedFile = _req$body.selectedFile, tags = _req$body.tags;

          if (_mongoose["default"].Types.ObjectId.isValid(id)) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.status(404).send("No post with id: ".concat(id)));

        case 4:
          updatedPost = {
            creator: creator,
            title: title,
            message: message,
            tags: tags,
            selectedFile: selectedFile,
            _id: id
          };
          _context3.next = 7;
          return regeneratorRuntime.awrap(_postMessage["default"].findByIdAndUpdate(id, updatedPost, {
            "new": true
          }));

        case 7:
          res.json(updatedPost);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.updatePost = updatePost;

var deletePost = function deletePost(req, res) {
  var id;
  return regeneratorRuntime.async(function deletePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;

          if (_mongoose["default"].Types.ObjectId.isValid(id)) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(404).send("No post with id: ".concat(id)));

        case 3:
          _context4.next = 5;
          return regeneratorRuntime.awrap(_postMessage["default"].findByIdAndRemove(id));

        case 5:
          res.json({
            mes: "post deleted successfully"
          });

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.deletePost = deletePost;

var likePost = function likePost(req, res) {
  var id, post, updatedPost;
  return regeneratorRuntime.async(function likePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;

          if (_mongoose["default"].Types.ObjectId.isValid(id)) {
            _context5.next = 4;
            break;
          }

          return _context5.abrupt("return", res.status(404).send("no post find with ".concat(id)));

        case 4:
          _context5.next = 6;
          return regeneratorRuntime.awrap(_postMessage["default"].findById(id));

        case 6:
          post = _context5.sent;
          _context5.next = 9;
          return regeneratorRuntime.awrap(_postMessage["default"].findByIdAndUpdate(id, {
            likeCount: post.likeCount + 1
          }, {
            "new": true
          }));

        case 9:
          updatedPost = _context5.sent;
          // const index = post.likeCount.findIndex((id) => id === String(req.userId))
          // if(index === -1){
          //     post.likeCount.push(req.userId)
          //     alert("post already liked")
          // } else{
          //     post.likeCount = post.likeCount.filter((id) => id !== String(req.userId))
          // }
          res.json(updatedPost);
          _context5.next = 16;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 16:
          console.log(likePost);

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.likePost = likePost;
var _default = router;
exports["default"] = _default;

var searchPost = function searchPost(req, res) {
  var searchQuery, title, posts;
  return regeneratorRuntime.async(function searchPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          searchQuery = req.query.searchQuery;
          _context6.prev = 1;
          title = new RegExp(searchQuery, 'i');
          _context6.next = 5;
          return regeneratorRuntime.awrap(_postMessage["default"].find({
            title: title
          }));

        case 5:
          posts = _context6.sent;
          res.json({
            data: posts
          });
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.searchPost = searchPost;