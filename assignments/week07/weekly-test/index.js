var express = require('express');
var session = require('express-session');
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db;
var app = express();

mongoClient.connect('mongodb://localhost:27017', function(err, client){
    if (err) throw err;
    db = client.db('mylib');
});

app.use(
    session({
        secret: 'Express session secret'
    })
);
 
app.use(express.urlencoded({extended:false}));


app.get('/',function(req,res){
    if (req.session.loggedIn == true) {
        res.send('students')
    } else {
       res.send('homepage');
    }
})


app.put('/getStudent',function(req,res){
    console.log(req.query);
    console.log(req.body);
    db.collection('students').updateOne({_id:ObjectId(req.query.id)},{$set:{hometown:req.body.hometown}},function(err,result){
        if(err)
        throw err;

        if(result)
        res.json(result);

        else
        res.send('Failed');
    })
})
 
app.delete('/modifyStudent' , function (req, res) {
    db.collection('students').deleteOne({_id: ObjectId(req.query.id)},
    {$set:{hometown:req.body.hometown}}, function(error,result){
    if(error)
    throw error;

    if(result)
    res.json(result)

    else
    res.send("Not deleted");

    });
 });

app.get('/logout' , function (req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

