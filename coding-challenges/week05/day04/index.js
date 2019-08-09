
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json()) //middleware

//{
//   name: "Name",
//   phone: "phone-no"
//}

var contacts = [{
    name: "Name",
    phone: "phone-no"
}]

//CRUD
//Create
app.post("/", function(req,res){
    var contactItem = req.body
    contacts.push(contactItem)
    res.send(contacts)
})

//Read
app.get("/", function(req,res){
    res.send(contacts)
})

//Update
app.put("/", function(req,res){
    for(let i=0; i < contacts.length; i++){
        if(contacts[i].name.toLowerCase() == req.body.name.toLowerCase()){
            contacts[i].phone = req.body.phone
        }
    }//loop ends
    res.send(contacts)
})

//Delete
app.delete("/", function(req,res){
    res.send(contacts)
})

app.listen(3000, function(){
    console.log("App running at 3000!")
})