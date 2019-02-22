var fs = require('fs');
var dir = process.argv[2]
    
fs.readdir(dir, function (err, files) {
	if (err) {
        	return console.log(err)
      	}
	        
	for(var i = 0; i < files.length; i++) {
       		if(files[i].indexOf("." + process.argv[3]) != -1) {
			console.log(files[i]);      
		}
	}
});
