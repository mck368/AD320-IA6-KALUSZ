var mod = require('./ex6Mod.js');
var dir = process.argv[2];
var ext = process.argv[3];
mod(dir, ext, function(err, files) {
	if(err) {
		return console.error('Error: ', err);
	}
	files.forEach(function(file) {
		console.log(file)	
	})
});

