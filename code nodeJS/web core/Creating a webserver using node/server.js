// var express = require("express");
// var app = express();
// var path = require("path");
// var serveStatic = require("serve-static");
// // app.use('/static', express.static('public'));
// app.use("/static", express.static(path.join(__dirname, "public")));
// app.get('/', function (req, res) {
//   res.send('hello VnsKing');
// });

// var server = app.listen(8081, function () {
//    var host = server.address().address;
//   var port = server.address().port;
//   console.log("Example app listening at: http://%s:%s",host , port);

//   console.log("server is running at http://127.0.0.1:8081/");
// });
const express = require('express')
const app = express()
const port = 3000

var path = require("path");
var serveStatic = require("serve-static");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));