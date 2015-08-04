var fs = require('fs');
var pattern = /<strong>&#8220;[\n\w\s:<>\/,.]*&#8221;<\/strong>[\w\n\s<>\/\;,]*~[\w\s]*/;
var htmlfile = /^.*.html$/;
var dir = fs.readdirSync('.');
//console.log(dir);
var file;

var callBack = function (err,fd){
   //console.log(arguments[0]+arguments[1]+arguments[2]);
   console.log("hi");
   if(err){
				console.log("error");
			}
			else{
				if(pattern.exec(fd.toString())!=null){
					console.log(pattern.exec(fd.toString())[0]);

				}else{
					console.log("didn't match file " + dir[this.file]);
				}
				
			}
		}


for (file in dir){
	if(htmlfile.test(dir[file])){
		console.log(dir[file]);
		
		//var fd = fs.readFileSync(dir[file]);
		// fs.readFile(dir[file],function(err,fd){
		// 	if(err){
		// 		console.log("error");
		// 	}
		// 	else{
		// 		if(pattern.exec(fd.toString())!=null){
		// 			console.log(pattern.exec(fd.toString())[0]);

		// 		}else{
		// 			console.log("didn't match file " + dir[file]);
		// 		}
				
		// 	}
		// });

		fs.readFile(dir[file],callBack.bind({file:file}));
	}
}

// var files = fs.readFile('h1438350823312_1.html',function(err,fd){
// if(err)
// 	console.log("error");
// else
// 	console.log(pattern.exec(fd.toString())[0]);
// });
