var http = require('http');
var os   = require('os');
var url  = require('url');

function start(route, handles) {
    function onRequest(request, response) {
        var postdata = '';
		var pathname = url.parse(request.url).pathname;
        
        console.log("Request for " + pathname + " receieved.");
        
		request.setEncoding('utf8');
		request.addListener('data', function(post_data_chunk) {
			postdata += post_data_chunk;
			console.log('Received post chunk "' + post_data_chunk + '".');
		});

		request.addListener('end',function() {
			route(handles, pathname, response, postdata);
		});
        //route(handles, pathname, response)
        
    }
    var port = 5000;
	
	//var ni = os.networkInterfaces();
	//var ip = ni['eth0'][0]['address'] 
    
	http.createServer(onRequest).listen(port);//, '0.0.0.0');
    console.log("Server has started on port: "+port);
}

exports.start = start;
