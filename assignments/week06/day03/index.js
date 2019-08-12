var express = require('express');
var session = require('express-session');

var app = express();

app.use(
    session({
        secret: 'Express session secret'
    })
);

app.use(express.urlencoded({ extended: false}));

app.use(express.static('public'));

var students = [
    {
        username: 'hemant',
        email: 'hemant@gmail.com',
        password: 'hemant'

    },
    {
        username: 'pratyush',
        email: 'pratyush@gmail.com',
        password: 'pratyush'

    },
    {
        username: 'vicky',
        email: 'vicky@gmail.com',
        password: 'vicky'

    },
];

app.post('/login', function(req,res){
    for (var i = 0; i < students.length; i++) {
        if (
            req.body.email == students[i].email &&
            req.body.password == students[i].password
        ) {
            req.session.loggedIn = true;
            req.session.username =  students[i].username;
        }
    }
    res.redirect('/user');
});

app.get('/user', function(req, res) {
    if (req.session.loggedIn == true) {
        res.sendfile('./webmail.html');
    } else {
        res.redirect('/');
    }
});

app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});


































