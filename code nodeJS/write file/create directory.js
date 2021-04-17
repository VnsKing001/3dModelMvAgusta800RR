var fs = require('fs');
console.log("create a directory");

fs.mkdir('./ahihi', function(err){
    if(err){
        return console.log(err);
    }
    console.log("create directory successfully");
});