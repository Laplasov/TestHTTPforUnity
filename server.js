const http = require('http');

// Use Render's assigned port (process.env.PORT is set automatically)
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Log incoming requests for debugging
  console.log(`Received ${req.method} request for ${req.url}`);

  // Handle GET /test
  if (req.method === 'GET' && req.url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Render HTTP server!');
  }
  // Handle POST /echo
  else if (req.method === 'POST' && req.url === '/echo') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // Collect the request body
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Echo: ${body}`); // Echo back the body
    });
  }
  // Handle all other requests with a 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
