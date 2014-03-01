var express = require('express')
	, app = express();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

app.get('/', function(req, res) {
	app.locals.pageTitle = "Mi paginita";
	res.render('index');
});

app.post('/user', function(req, res) {
	console.log(req.body);
	res.render('index');
});

app.listen(8080, "10.0.1.199");
console.log('Escuchando en puerto 10.0.1.199:8080');