var fs = require("fs");

fs.stat('file.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("got file");

    console.log("is file? "+ stats.isFile());
    console.log("is Directory? "+ stats.isDirectory());

});
