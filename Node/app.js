//hello world
function sayHello(name){
    console.log('Hello ' + name);
}
sayHello('Finbar');

//module
//console.log(module);

//using logger module
const Logger = require('./logger');
const logger = new Logger();
//console.log(logger);
//logger.log('message');
//log('message');

//path module (built-in module (no '/' required))
const path = require('path');
var pathObj = path.parse(__filename);
//console.log(pathObj);

//os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//fs module
const fs = require('fs');
const files = fs.readdirSync('./');
console.log('Your files: ' + files);

//events module
const EventEmitter = require('events');

//register a listener
// emitter.on('messageLogged', function(arg){
//     console.log('listener called!', arg);
// });

logger.on('messageLogged', (arg) => {
    console.log('listener called!', arg);
});

logger.log('message!');

//HTTP module
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('hello world!');
        res.end(); 
    }
    if (req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');