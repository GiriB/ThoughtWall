//var text ='india';
var fs = require('fs');


var res ='';
var text = fs.readFileSync('./45.txt',encoding='utf8');
console.log(text);
var onforbrace =false;
var onforhexa =false;
// console.log(process.argv[2]);


for (i=0;i<text.length;i++)
     {
     	//process.stdout.write(text[i]);
     	if(onforhexa){
     		console.log('inside 1');
     		if(text[i]==';'){
     			onforhexa=false;
     		}

     	}else if(!onforbrace){
     					//we haven't read an opening bracket
     					console.log('inside 2');
     					if(text[i]=='<'){

     						onforbrace=true;
     					}else if (text[i]=='&' && text[i+1]=='#'){
     							onforhexa= true;
     					}else{
     						res+=text[i];
     					}
     	}else{
     		console.log('inside 3');

     		if(text[i]=='>'){
     			onforbrace=false;
     		}
     	}	

     }
     

process.stdout.write('\n '+res); 