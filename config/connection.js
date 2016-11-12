//require mysql & create db connection
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: ,
	user: , 
	password: , 
	database: 
});
//db connection debugging
connection.connect(function(err) {
	if (err) { 
		console.log('DATABASE CONNECTION ERROR: ' + err.stack);
	};

	console.log('connected as id: ' + connection.threadId)
});

module.exports = connection;