var buf=new Buffer('hello Vnsking');
var json= buf.toJSON(buf);
console.log(json);


// var buffer1 = new Buffer("vns-king ");
// var buffer2 = new Buffer("is so handsome.");
// var buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log(buffer3.toString());


var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if(result<0){
    console.log("ahihhi");
}else if(result == 0){
    console.log("ahuhuhu");
}else {
    console.log("unknown things");
}

var buffer3 = new Buffer('ABC');
var buffer4 = new Buffer(3);
buffer4.write('ahi');
console.log(buffer4.toString());
