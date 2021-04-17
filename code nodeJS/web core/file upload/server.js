var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var port = 3000;
var serveStatic = require("serve-static");
// var path = require("path");
// app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
// app.use(multer({dest: '/public/'}));

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/file_upload', function(req, res){

    var file = (__dirname +"/"+ req.files.file.name);

    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    fs.readFile(req.files.file.path, function(err, data){
        fs.writeFile(file, data, function(err){
            if(err){
                console.log(err);
            }else{
                response = {
                    message: 'File uploaded',
                    filename: req.files.file.name
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));