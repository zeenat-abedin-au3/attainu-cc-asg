var express = require('express');
var session = require('express-session');
var mongoClient = require('mongodb').MongoClient;
var db;

mongoClient.connect('mongodb://localhost:27017', function(err, client){
    if (err) throw err;
    db = client.db('mylib');
});

var app = express();

app.use(
    session({
        secret: 'Express session secret'
    })
);

app.use(express.urlencoded({ extended: false}));

app.use(express.static('public'));

app.post('/auth', function(req,res){
  db.collection('admin')
    .find()
    .toArray(function(err, result){
    if (err) throw err; 
    for (var i = 0; i < result.length; i++) {
    if (
    req.body.username == result[i].username &&
    req.body.password == result[i].password
  ) {
    req.session.loggedIn = true;
    }
   }
    res.redirect('/user');
  });
});

app.get('/user', function(req, res) {
    if (req.session.loggedIn == true) {
        res.sendfile('./addStudents.html');
    } else {
        res.redirect('/');
    }
});

app.post('/addstudent', function(req, res){
    db.collection('students').insert(req.body);
    console.log('inserted');
    res.redirect('/user')
})

app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
