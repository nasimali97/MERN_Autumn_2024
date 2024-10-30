var http = require('http');

// send HTTP header, HTTP status: 200 : OK, Content type: text/plain
http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is my first node.js server\n');
    }
    if(req.url === '/myBlog'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is the home page for my blog</h1>');
    }
    if(req.url === '/table'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                </tr>
                <tr>
                    <td>Matti</td>
                    <td>Timotie 1</td>
                    <td>Tampere</td>
                </tr>
                <tr>
                    <td>Maija</td>
                    <td>Asematie 12</td>
                    <td>Kiljava</td>
                </tr>
            </table>
        `);
    }
    if(req.url === '/helloworld'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello world in HTML</h1>');
    }
    if(req.url === '/homepage'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('HOMEPAGE');
    }
    if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Us');
    }
    if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact Us');
    }
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/');