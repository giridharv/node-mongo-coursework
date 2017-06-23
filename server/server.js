var mongoose = require('./db/mongoose')
var Todo =require('./models/todo').Todo
var Users = require('./models/users')
var express = require('express')
var bodyparser = require('body-parser')
var ObjectId = require('mongodb').ObjectID


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

app.get('/todos',function (req,res) {
    Todo.find().then(function (todos) {
       res.send(todos)
        console.log({todos})
    },function (e) {
        console.log(e)
    })
})

app.get('/todos/:id',function (req,res) {
    var id = req.params.id;
    if(!ObjectId.isValid(id))
    {

    }
    else
    {
        Todo.findOne({_id:id}).then(function (todo) {
            res.send(todo)
            console.log(todo)
        },function (err) {
            res.sendStatus(404).send(err)
        })
    }
})
app.listen(3000,function () {
    console.log("Server up on 3000")
})
