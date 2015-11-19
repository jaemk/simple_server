var http = require('http');
var os = require('os');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        
        console.log("Request for " + pathname + " receieved.");
        
        route(pathname)
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello!" + pathname );
        response.end();
    }
    var port = 5000;
    var ni = os.networkInterfaces();
    var ip = ni['eth0'][0]['address'] 
    http.createServer(onRequest).listen(port);//, '0.0.0.0');
    console.log("Server has started on port: "+port);
}

exports.start = start;
