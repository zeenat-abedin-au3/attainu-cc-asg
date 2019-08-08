var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var tweets = [
    {
        name: "digitizer",
        tweet: "This is a cool piece of information."
    },
    {   
        name: "M0SH",
        tweet: "@digitizer I agree."
    }
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/twitter.html')
});

app.get('/getAllTweets', function(req, res) {
    res.json(tweets);
});

app.post('/addNewTweet', function(req, res) {
    console.log(req.body);  //checking on console
    tweets.push(req.body);
    res.json({success: req.body.name + "  posted a new tweet"});    
});

app.listen(3000, function(){
   console.log("Listening on port 3000");
});