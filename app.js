var express = require('express');
var app = express();

var port = 5001;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/',function(req,res){
	res.send('Landing page for Alex Website');
});

app.listen(port, function(err){
	console.log('Started Alex Website on port: ' + port);
});