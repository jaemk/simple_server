

function route(handles, pathname, response, postdata) {
    console.log("Routing to: " + pathname);

	if (typeof handles[pathname] === 'function'){
		handles[pathname](response, postdata);
	} else {
		console.log('There is no handler for  ' + pathname);
		response.writeHead(404, {'Content-Type':'text/plain'});
		response.write('404 not found!!');
		response.end();
	}
}

exports.route = route;
