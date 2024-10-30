var http = require('http');
var fs = require('fs');

// Create a web server
http.createServer(function (req, res) {
    if (req.url === '/jsondata') {
        // Read the dataset.json file
        fs.readFile('dataset.json', 'utf8', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading the JSON file.');
                return;
            }
            
            // Set the content type to text/json
            res.writeHead(200, {'Content-Type': 'text/json'});

            // Send the JSON data as plain text
            res.end(data);
        });
    } else {
        // Handle other routes
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/jsondata');
