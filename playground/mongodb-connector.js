var MongoClient = require('mongodb').MongoClient
var ObjectID =require('mongodb').ObjectID

//
// var obj = new ObjectID();
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp',function (err,db) {
  if(err)
  {
      console.log("Error connecting to db")
  }
  else
  {
     db.collection('Users').find({
         _id : new ObjectID('594b0579491f4dd7f450a88a')
     }).toArray().then(function (docs) {
         console.log(JSON.stringify(docs[0].name))
     },function (error) {
         console.log("Error")
     })
  }
  db.close()
})