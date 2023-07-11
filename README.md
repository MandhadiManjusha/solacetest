const http = require("http");
const fs = require ('fs');
const server = http.createServer((req,res) => {
fs.readfile('data.txt', 'utfs', (err,data) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/html' });
res.write('<h1> ERROR </h1>');
res.end();
} else {
res.writeHead(200, { 'Content-type':'text/plain' });
res.write(data);
res.end();
}
});
});
server.listen(9091,'127.0.0.1', () => {
console.log('Good Day');
});
