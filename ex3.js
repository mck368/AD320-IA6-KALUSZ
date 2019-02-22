var fs = require('fs');

function newLineCount(fileString) {
    var line = 0;
    for(var i = 0;  i < fileString.length; i++) {
        if(fileString.charAt(i) === '\n') {
            line++;
        }
    }
	return line;
 }

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var x = newLineCount(str);
console.log(x);
