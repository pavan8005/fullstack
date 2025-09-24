const http = require('http');

// Normal function
function handler3(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({data:'Hello, World!\nThis is a json response'}));
}

// Function expression
const handler2 = function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
};

// Arrow function
const handler1 = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
};

// Choose which handler to use
const server = http.createServer(handler1);

const port = 5173; // you can change to 5173 if you want
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
