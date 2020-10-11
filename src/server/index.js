const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

http.createServer(function (request, response) {
    console.log('request ', request.url);
    let filePath = '.' + request.url;

    if (filePath === './') {
        filePath = './index.html';
    }

    if (filePath.includes('css')) {
        filePath = './src/client/stylesheets/style.css';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function (error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);