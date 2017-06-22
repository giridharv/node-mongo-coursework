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


// var newTodo = new Todo({
//     text:'Be in downtown tommorow at 8am',
//     completed:true,
//     completedAt:1843
// })
//
// newTodo.save().then(function (doc) {
//     console.log(doc)
// },function (err) {
//     console.log(err)
// })
//
// var todo = new Todo({
//     text:'Just do it'
// })
//
// todo.save().then(function (doc) {
//     console.log(doc)
// },function (err) {
//     console.log(err)
// })



// var user = new User({
//     email:'giridharv9@gmail.com'
// })
// user.save().then(function (doc) {
//     console.log(doc)
// },function (err) {
//     console.log(err)
// })