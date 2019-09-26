var express = require("express");
var hbs = require('hbs');
var session = require("express-session");
var mongoClient = require("mongodb").MongoClient;
var db;

mongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    db = client.db("login");
});


var app = express();
app.use(
    session({
        secret: "Express session secret",
        resave: false,
        saveUninitialized: true,
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

app.get("/", (req, res) => {
    res.redirect("/login")
})

app.get("/dashboard", (req, res) => {
    if (!req.session.loggedin) {
        res.redirect('/login')
        return
    }
    res.render("dashboard", {
        title: "Dashboard Page"
    })
})

app.get("/login", (req, res) => {
    res.render("login", {
        title: "Login"
    })
})
app.post('/login', (req, res) => {
    var { email, password } = req.body
    db.collection("users").findOne({ email: email }, function (err, result) {
        if (err) throw err;

        if (!result) {
            res.redirect("/login")
            return
        }
        if (result.password !== password) {
            res.redirect("/login")
            return
        }
        req.session.loggedin = true
        res.redirect("/dashboard")
    })
})
app.get("/signup", function (req, res) {
    res.render("signup", {
        title: "add Users",
        user: req.session.user
    });
});
app.post("/signup", function (req, res) {
    var { username, email, mobile, password } = req.body

    db.collection("user").insertOne({ username, email, mobile, password }, function (err, result) {
        if (err) throw err;
        res.redirect("/login")
    })
})


app.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/")
})

app.listen(3000, function (req, res) {
    console.log("listening at 3000");
});













