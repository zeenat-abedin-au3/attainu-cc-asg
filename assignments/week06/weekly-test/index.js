var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var users = require('./users.json');
var tweets = require('./tweets.json');
var hbs = require('hbs')

var app = express();

app.use(session({
    secret: 'secret for login page'
}));

app.use(bodyParser.urlencoded());
app.set('view engine', 'hbs');
app.use(function(req, res, next) {
    if(!req.session.views) {
        req.session.views = {}
    }
    var path = req.originalUrl;
    req.session.views[path] = (req.session.views[path] || 0 ) + 1;
    next();
  });
  

app.use(express.static('public'));
app.get('/login', function(req, res){
res.sendfile(__dirname +'/public/index.html');
    
});

app.post('/auth', function(req, res) {
    var flag = false
    for(var i=0; i<users.length; i++){
     if (req.body.username == users[i].name && req.body.password == users[i].password)
        {
         flag = true;
        break;
        }
    }
    if(flag) {
        req.session.loggedIn = true;
        res.redirect('/user');
    }else {
        res.redirect('/login');
    }
});

app.get('/user', function(req, res) {
    if (req.session.loggedIn == true) {
        res.sendfile('./index.html');
    } else {
        res.redirect('/');
    }
});


app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000);
