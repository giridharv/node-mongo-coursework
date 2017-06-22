var mongoose = require('./db/mongoose')
var Todo =require('./models/todo').Todo
var Users = require('./models/users')
var express = require('express')
var bodyparser = require('body-parser')

var app = express()
app.use(bodyparser.json())


app.post('/todos',function (req,res) {
    var todo = new Todo(
        {
            text:req.body.text
        }
    )
    todo.save().then(function (doc) {
       res.send(doc)
    },function (err) {
        res.status(400).send(err)
    })
})
app.listen(3000,function () {
    console.log("Server up on 3000")
})
