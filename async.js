const async = require("async");

function average(a, b, c) {
    return new Promise ((resolve) => {
	    setTimeout(() => {
		    resolve((a+b+c)/3);
		}, 2000);
	    });
}

async function output(a,b,c) {
const ans = await average(a,b,c);
    console.log(ans);
}

output(20,30,40);	
		