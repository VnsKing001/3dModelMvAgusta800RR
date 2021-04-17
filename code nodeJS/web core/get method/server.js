var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var port = 3000;
var path = require("path");
var serveStatic = require("serve-static");



app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/index.html', function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/process_get', function(req, res){
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post('/process_post', urlencodedParser , function(req, res){
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));