var fs = require('fs');
var buf = new Buffer(1024);

fs.open('file.txt', 'r+', function(err, fd){
    if(err){
        console.log("err1");
    }
    fs.ftruncate(fd, 2, function(err){
        if(err){
            console.log('err2');
        }
        console.log("truncated ok!");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if(err){
                console.log('err3');
            }
            if(bytes>0){
                console.log(buf.slice(0, bytes).toString());
            }


            fs.close(fd, function(err){
                if(err){
                    console.log("err4");
                }
                console.log('close file successfully');
            });
        });
    });
});