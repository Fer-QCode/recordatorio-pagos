var express = require('express')
	, app = express();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	app.locals.pageTitle = "Mi paginita";
	res.render('index');
});

app.get('/users', function(req, res) {
	res.send('Por el momento no hay usuarios');
});

app.listen(8080);
console.log('Escuchando en puerto 8080');