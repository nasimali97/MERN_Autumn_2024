var http = require('http');
var fs = require('fs');

// Create the HTTP server
http.createServer(function (req, res) {
    if (req.url === '/') {
        // Read the sampledata.json file
        fs.readFile('sampledata.json', 'utf8', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading JSON file.');
                return;
            }

            // Parse the JSON data
            var jsonData = JSON.parse(data);
            // Start building the HTML response
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<html><head><title>People Data</title></head><body>');
            res.write('<h1>People Information</h1>');
            res.write('<div class="people">'); // Container for people data
            
            // Iterate through the JSON data to display each person's info
            jsonData.forEach(function(person) {
                res.write('<div class="person">');
                res.write(`<h2>${person.name}</h2>`);
                res.write(`<p>Age: ${person.age}</p>`);
                res.write(`<p>Company: ${person.company}</p>`);
                res.write(`<p>Address: ${person.address}</p>`);
                res.write('</div><hr>'); // Close person div and add separator
            });
            
            res.write('</div>'); // Close the people container
            res.write('</body></html>');
            res.end(); // End the response
        });
    } else {
        // Handle 404 Not Found for other routes
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
}).listen(3000); // Server listens on port 3000

// Console will print the message
console.log('Server running at http://localhost:3000/');
