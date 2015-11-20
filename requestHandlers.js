var exec = require('child_process').exec;
var fs   = require('fs');
var qstring = require('querystring');

function start(response, postdata) {
	console.log("Request handler 'start' was called.");

	fs.readFile('start.html', function (err, data) {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.write(data);
		response.end();
	});

	//exec('ls -lh', function (error, stdout, stderr) {
	//	response.writeHead(200, {'Content-Type':'text/plain'});
	//	response.write(stdout);
	//	response.end();
	//});
}

function upload(response, postdata) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write('You posted and sent: ' + qstring.parse(postdata).text);
	response.end();
}

var routes = ['/','/start','/upload']
exports.start = start;
exports.upload = upload;

