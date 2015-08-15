
"use strict";

var express = require ("express");
var morgan = require('morgan');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer  = require('multer');

var app = express ();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

var filename;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    filename = 'img' + obj.length;
    if ( file.mimetype === 'image/jpeg') filename += '.jpg';
    else if ( file.mimetype === 'image/png') filename += '.png';
      
    cb(null, filename);
  }
});

app.use(multer({ 
    storage: storage
}).single('photo'));

var newcomm = {};
var obj;

obj = JSON.parse(fs.readFileSync('database/data.json', 'utf8'));
console.log(obj);

app.get('/getdatabase', function(req, res){
  res.send(obj);
});

app.post('/sendcomm', function(req, res){
  addComm(req.body);
  res.send('ok');
});

app.post('/sendimg', function (req, res, next) {
    obj.push(newObj(req.body.user, req.file.filename));
    fs.writeFile('database/data.json', JSON.stringify(obj));
    res.redirect('/');
});

var addComm = function (data){
    newcomm.user = data.user;
    newcomm.comm = data.comm;
    obj[data.eid].comments.push(newcomm);
    fs.writeFile('database/data.json', JSON.stringify(obj));
};

var newObj = function(usr, img){
    return {
        user: usr,
        photo: 'img/'+img,
        likes: 0,
        comments: []
    };
}


var server = app.listen(443, function () {
	// optional
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});