var express = require("express");
var bodyParser = reuire("body-parser")
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
]



app.get('/twitter.html',function(req, res) {
    res.json(tweets);
});



app.use('/tweet',bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.post('/tweet',function(req,res){

    data.push(req.body);
    res.json(data);
})


app.listen(3000)
