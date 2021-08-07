import myFunc from "./es6.js";

const myVar = 5;
console.log(myVar);
// process.env.NODE_ENV ='development';
// console.log("env", process.env.NODE_ENV);


// Check ES6 Feature
myFunc();

// Start Node server

import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Aena\n');
}).listen(5000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:5000/');

export default server;


