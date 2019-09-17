var express = require("express");
var hbs = require('hbs');
var session = require("express-session");
var mongoClient = require("mongodb").MongoClient;
var db;

mongoClient.connect( 'mongodb://localhost:27017', function (err, client) {
    if (err) throw err;
    db = client.db("login");
});


var app = express();
app.use(
    session({
        secret: "Express session secret"
    })
);

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));

// hbs middleware
app.set('view engine', 'hbs');

// express body-parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


app.get("/signup", function (req, res) {
    res.render("signup", {
        title: "add Users",
        user: req.session.user
    });
});


app.post("/users/user", function (req, res) {
    db.collection("users").insertOne(req.body, function (err, result) {
        if (err) throw err;
        console.log(req.body)
        res.redirect("/login")
    })
});


app.listen(port, function (req, res) {
    console.log("listening at 3000");
});













