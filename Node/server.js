// console.log(global)
// Possibly experience with other libraries and frameworks
// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
// 3) global object instead of window object
//console.log(global);
// 4) Has Common Core modules that will explore
// 5) Common JS modules instead of ES6 modules

// const os = require('os');
// const path =require('path');
// const { add, subtract, multiply, divide } = require('./math');

// console.log(add(2, 3))
// console.log(subtract(2, 3))
// console.log(multiply(2, 3))
// console.log(divide (2, 3))


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir);

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))



const http = require('http');
const fs = require('fs');

const users = [{id: 1, name: 'Ayahm'}, {id: 2, name: 'Aws'}]; // Sample data

const server = http.createServer((req, res) => {
  // Handle the /users endpoint
  if (req.method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (req.method === 'POST' && req.url === '/users') {
    // Parse the request body
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const user = JSON.parse(body);
      user.id = users.length + 1;
      users.push(user);
      res.statusCode = 201;
      res.end();
    });

    
  } else if (req.method === 'GET' && req.url === '/trainees') {
    // Serve the static HTML file
    fs.readFile('./trainees.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    // Handle invalid routes
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


