
"use strict";

var express = require ("express");
var morgan = require('morgan');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express ();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));


var obj;

obj = JSON.parse(fs.readFileSync('database/data.json', 'utf8'));
console.log(obj);

app.get('/getdatabase', function(req, res){
  res.send(obj);
});

app.post('/senddata', function(req, res){
  console.log(req);
  res.send('ok');
});


var server = app.listen(443, function () {
	// optional
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});