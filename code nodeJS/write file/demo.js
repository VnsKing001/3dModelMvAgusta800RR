var fs = require("fs");
// fs.open("file.txt", "a+", function (err, fd) {
//   if (err) {
//     console.log("err");
//   }
//   console.log("open file");
//   console.log("write file");
fs.appendFile("file.txt", " is so handsome.", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("write file successfully.");
  console.log("read that things");
  fs.readFile("file.txt", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("the content: " + data.toString());
  });
});
// });
