var fs = require('fs');

//this pattern matches the 'Thought' along with its author
//var pattern = /<strong>&#8220;[\n\w\s:<>\/,.]*&#8221;<\/strong>[\w\n\s<>\/\;,]*~[\w\s]*/;
var pattern = /<strong>[\w\d;:’\s.\/<,!'"&#“\-”>]*<\/strong>[\w\s<>\/,;\n]*~[\w\s-]*/;
//this pattern matches all the html files
var htmlfile = /^.*.html$/;

//reading the directory
var dir = fs.readdirSync('.');


var file;

var callBack = function (err,fd){
   //console.log(arguments[0]+arguments[1]+arguments[2]);
   console.log("hi");
   if(err){
				console.log("error");
			}
			else{
				if(pattern.exec(fd.toString())!=null){
					//pattern.exec(fd.toString())[0] is the relevent text (thought and the author)

					console.log(pattern.exec(fd.toString())[0]);
					//getThoughtandAuthor();


				}else{
					console.log("didn't match file ******************************************" + dir[this.file]);
				}
				
			}
		};

var getThoughtandAuthor= function(text,callback) {


};


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
