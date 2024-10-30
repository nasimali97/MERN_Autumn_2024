var http = require('http');

// send HTTP header, HTTP status: 200 : OK, Content type: text/plain
var server = http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is my nodemon trial\n');
    }
    if(req.url === '/myBlog'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is the home page for my blog</h1>');
    }
}
);

var port = process.env.PORT || 3000;
server.listen(port);

// Console will print the message
console.log('Server running at http://localhost:3000/');