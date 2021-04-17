var fs = require('fs');

console.log("start open file");
fs.open("file.txt", 'r+', function(err, fd){
    if((err)){
        console.log("err");
    }
    console.log("file opened successfully");
});