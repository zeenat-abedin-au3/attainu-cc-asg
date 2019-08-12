var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var hbs = require('hbs')

var app = express();

app.use(session({
    secret: 'This is my session ID cookie'
}));

app.use(bodyParser.urlencoded());

app.use(express.static('public'));

//view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('hbs', '/tweet.hbs' );


var users = [
    {
        username: "digitizer",
        password: "digitizer"
    },
    {
        username: "mosh",
        password: "hello123"
    }
]

var tweets=[
    {
        name: "digitizer",
        tweet: "This is a cool piece of information."
    },
    {
        name: "M0SH",
        tweet: "@digitizer I agree."
    }
]


app.use(function(req, res, next) {
    if(!req.session.views) {
        req.session.views = {};
    }
    var path = req.originalUrl;
    if(req.session.views[path] > 0)
        req.session.views[path]++;
    else
        req.session.views[path] = 1;
    next();
});

app.get('/', function (req, res) {
    if (req.session.loggedIn)
        res.redirect('/profile');
    else
        // res.sendFile(__dirname + '/public/index.html');
        res.redirect('/index.html');
});

app.get('/profile', function (req, res) {
    if(req.session.loggedIn)
        res.send("<h1>Welcome " + req.session.user.username + "</h1><h2>You are visiting here for the " + req.session.views[req.originalUrl] + " time</h2><a href='/logout'>Log out</a>");
    else
        res.redirect('/');
});

app.post('/auth', function(req, res) {
    var flag = false;
    for(var i=0; i<users.length; i++) {
        if (users[i].username == req.body.username && users[i].password == req.body.password) {
            flag = true;
            break;
        }
    }
    if(flag) {
        req.session.loggedIn = true;
        req.session.user = {
            username: "digitizer",
        };
        res.redirect("/profile");
    }
    else
        res.redirect("/");
});

app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000);
