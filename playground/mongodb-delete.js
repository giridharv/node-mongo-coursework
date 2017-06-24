var mongoose = require('./../server/db/mongoose')
var Todo =require('./../server/models/todo').Todo
var Users = require('./../server/models/users')
var express = require('express')
var bodyparser = require('body-parser')
var ObjectId = require('mongodb').ObjectID

// Todo.findOneAndRemove({_id:'594c241dafb7c012dd5cc70f'}).then(function (res) {
//     console.log(res)
// })

Todo.findByIdAndRemove('594c4680106c4e2cb93ede2e').then(function (res) {
    console.log(res)
})