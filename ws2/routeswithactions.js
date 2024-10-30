var http = require('http');
var fs = require('fs');

// Create a web server
http.createServer(function (req, res) {
    // Check the request URL and respond accordingly
    if (req.url === '/') {
        // Root URL response
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Nothing here to see\n');
    } else if (req.url === '/frontpage') {
        // Serve frontpage.html
        fs.readFile('frontpage.html', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading frontpage.html\n');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/contact') {
        // Serve contact.html
        fs.readFile('contact.html', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading contact.html\n');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/plaintext') {
        // Serve plaintext.txt
        fs.readFile('plaintext.txt', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading plaintext.txt\n');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(data);
            }
        });
    } else if (req.url === '/json') {
        // Serve sampledata.json
        fs.readFile('sampledata.json', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading sampledata.json\n');
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(data);
            }
        });
    } else {
        // Handle 404 Not Found for any other URLs
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/');
