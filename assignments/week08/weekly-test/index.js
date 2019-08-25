var express = require('express');
var session = require('express-session');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var db;

mongoClient.connect( 'mongodb://localhost:27017', function (err, client) {
    if (err) throw err;
    db = client.db('attainu');
});

app.use(session({
    secret: 'This is my personal login security'
})
);


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(bodyParser.json());


app.engine("hbs", exphbs({ defaultLayout: "layout",extname: ".hbs"}));
app.set('view engine', "hbs");


app.get('/students', function (req, res) {
    var jsondata = [];
    db.collection('students')
    .find()
    .toArray(function (err, result) {
    if (err) { throw err;
    } 

    for (var i = 0; i < result.length; i++) {
        var p = JSON.stringify(result[i], null, 4);
        jsondata.push(p);
        }
        res.render('main.hbs', {
        data: result,
        script: "/delete.js"
        });
    })
})


app.delete('/students/student/:id', function (req, res) {
    db.collection('students').deleteOne({_id: require('mongodb').ObjectID(req.params.id)}, function (err, result) {
        if (err) throw err;
        console.log(req.params.id);
        res.json({success:"deleted"});
    })
})

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
