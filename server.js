var http = require('http');
var os = require('os');

function start() {
    function onRequest(request, response) {
        console.log("Request receieved.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello!");
        response.end();
    }
    var port = 5000;
    var ni = os.networkInterfaces();
    var ip = ni['eth0'][0]['address'] 
    http.createServer(onRequest).listen(port);//, '0.0.0.0');
    console.log("Server has started."+port);
}

exports.start = start;
