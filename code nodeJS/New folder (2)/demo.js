var fs =require("fs");
var data = "";

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf-8');

readerStream.on('data', function(chunk){
  data+= chunk;
});
readerStream.on('end', function(){
  console.log(data);
});
readerStream.on('error', function(){
  console.log(err.stack);
});
console.log("end 1");


var data1 = "ahihi vnsking is no.1";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data1, "utf-8");
writerStream.end();

writerStream.on("finish", function () {
  console.log("write complete");
});
writerStream.on("error", function () {
  console.log("err.stack");
});
console.log("end 2");

var writerStream1 = fs.createWriteStream("output.txt");
var readerStream1 = fs.createReadStream("input.txt");

readerStream1.pipe(writerStream1);
console.log("end 3");


//--create a file.zip (file mã hoó)

// var fs = require("fs");
var zlib = require('zlib');
// Compress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input1.txt'));
// console.log("File Compressed.");

//--de-create a file.zip (file ma hoó); 
// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input1.txt')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input4.txt'));
console.log("File Decompressed.");