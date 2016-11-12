//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//instantiate express application
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('method'))
//require handlebars & specify layout
var exphbs = require('express-handlebars');
app.engine('handlebars' , exphbs({
	defaultLayout: 'main'
}));
//set the view engine
app.set('view engine', 'handlebars');


//set port and set express app to listen to port
var port = 3000; 
app.listen(port);