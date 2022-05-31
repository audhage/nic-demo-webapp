// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<div align='center'>");
//     response.write("<img style='height 20%; width: 20%;' src='https://i.kym-cdn.com/photos/images/original/001/034/999/1de.gif'>")
//     response.write("</div>");
//     response.end()
// });

// const port = process.env.PORT || 1337;
// server.listen(port);
// console.log("Server running at http://localhost:%d", port);


import { createServer } from 'http';
import { readFile } from 'fs';

readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(process.env.PORT);
});