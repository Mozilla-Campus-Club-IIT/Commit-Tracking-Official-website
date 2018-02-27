const http = require('http'); //importing hhtp package
const app = require('./app'); //importing app  

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);