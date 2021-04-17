var fs= require('fs');
console.log('create directory');
fs.readdir("../write file/", function(err, files){
    if(err){
        return console.log(err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});