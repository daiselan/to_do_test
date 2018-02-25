var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [
	{
		id: 1,
		desc: 'first one'
	},
	{
		id: 2,
		desc: 'second one'
	}
]
var request1 = app.get('/', function(req, res) {
	res.send('toDo API root');
});

var request2 = app.get('/todos', function(req, res) {
	res.json(todos);
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT);
});