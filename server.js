var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var request = app.get('/', function(req, res) {
	res.send('toDo API root');
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT);
});