var app = require('app');
var BrowserWindow = require('browser-window');
app.on('ready',function(){
	var MainWindow = new BrowserWindow({
		width:400,
		height:400
	})
	console.log(__dirname);

	MainWindow.loadUrl('file://'+__dirname+'/IYM.JPG');
})