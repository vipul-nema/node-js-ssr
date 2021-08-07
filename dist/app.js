"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _es = _interopRequireDefault(require("./es6.js"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myVar = 5;
console.log(myVar); // process.env.NODE_ENV ='development';
// console.log("env", process.env.NODE_ENV);
// Check ES6 Feature

(0, _es["default"])(); // Start Node server

var server = _http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(5000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:5000/');
var _default = server;
exports["default"] = _default;