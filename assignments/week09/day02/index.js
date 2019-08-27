var express = require('express');
var session = require('express-session');
var app = express();
var mongoClient = require('mongodb').MongoClient;
var mongoId = require('mongodb').ObjectID;
var db;


mongoClient.connect( 'mongodb://localhost:27017', function (err, client) {
   if (err) throw err;
   db = client.db('attainu');
});

app.use(session({
   secret: 'This is my personal login security'
})
);

app.use(express.json());
app.put('/students/add',function(req,res){
    console.log(req.body);
  db.collection('students').updateOne({_id: mongoId(req.body.id)},{$set:{language:req.body.add}},{$unset:{language:req.body.remove}},function(err,result){
      if(err)
      throw err;
      if(result)
      res.json(result);
  })
})
app.listen(3000);