
var http = require('http');

var handleRequest = function(request, response) {
 console.log('Received request for URL: ' + request.url);
 response.writeHead(200);
 response.end('Hello World this is me!');
};
var www = http.createServer(handleRequest);
www.listen(8000);
