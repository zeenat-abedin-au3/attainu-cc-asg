var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.engine("hbs",exphbs({ defaultLayout: "main", extname:".hbs" }));
app.set("view engine", "hbs");

var me = {
    firstname: "Zeenat",
    lastname: "Abedin",
    bio: " My name is Zeenat and I live in Kolkata, India. I'm a 22 year old aspirant web developer. I did my graduation in computer science. I am eager to learn new skills in life despite the fact that I'm a slow learner." ,
    movies: [
        "3 Idiots",
        "Catch Me If You Can",
        "Interstellar ",
        "The Godfather "
    ]
};

app.get("/", function(req, res) {
    res.render("aboutme", {
        data: me,
        title: "About Me"
    });
});

app.listen(3000, function(){
    console.log("Listening on Port 3000");
});