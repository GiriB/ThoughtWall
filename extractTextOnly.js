//var text ='india';
var fs = require('fs');


var res ='';


var onforbrace =false;
var onforhexa =false;
var count =1;
// console.log(process.argv[2]);


var txtdir = fs.readdirSync('./txt/'); 

console.log(txtdir);


for (file in txtdir){

 var text = fs.readFileSync('./txt/'+txtdir[file],encoding='utf8');
 //console.log(text);

 //fs.writeFile('./quote/'+Date.now()+'.txt',text);

 
for (i=0;i<text.length;i++)
     {
     	//process.stdout.write(text[i]);
     	if(onforhexa){
     		//console.log('inside 1');
     		if(text[i]==';'){
     			onforhexa=false;
     		}

     	}else if(!onforbrace){
     					//we haven't read an opening bracket
     					//console.log('inside 2');
     					if(text[i]=='<'){

     						onforbrace=true;
     					}else if (text[i]=='&' && text[i+1]=='#'){
     							onforhexa= true;
     					}else{
     						res+=text[i];
     					}
     	}else{
     		//console.log('inside 3');

     		if(text[i]=='>'){
     			onforbrace=false;
     		}
     	}	

     }
     
  count++;   
 fs.writeFileSync('./quote/'+Date.now()+'_'+count+'.txt', res,encoding='utf-8');
//console.log('\n '+res+'*******');

//fs.writeFile('./quote/'+Date.now()+'.txt',res);
res=""; 
}