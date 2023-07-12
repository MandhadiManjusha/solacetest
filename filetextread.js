var fs = require("fs");

//No need to install the "fs" package separately because it comes as as

fs.readFile('node2.txt', function (err,data) {
   if (err) {
      console.log(err.stack);
	  return;
	  }
	  console.log(data.toString());
}};
console.log("program Ended");	  