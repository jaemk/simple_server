var server = require("./server");
var router = require("./router");
var requestHandlers = require('./requestHandlers');

var handles = {'/':      requestHandlers.start,
			  '/start': requestHandlers.start,
			  '/upload':requestHandlers.upload};
	
var word = 'start'
try {
	handles[word]()
}
catch(err) {
	console.log(err);
	console.error(err);
}

server.start(router.route, handles);
