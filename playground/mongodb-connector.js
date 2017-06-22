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
     // db.collection('Todos').deleteMany({completed:false}).then(function(result)
     // {
     //     console.log(result)
     // })
     //  db.collection('Todos').deleteOne({text:'apply'}).then(function(result)
     //  {
     //      console.log(result)
     //  })
     //  db.collection('Todos').findOneAndDelete({completed:true}).then(function (res) {
     //      console.log(res)
     //  })
     //  db.collection('Users').deleteOne({name:'Suresh'}).then(function (res) {
     //      console.log(res)
     //  })

      db.collection('Users').findOneAndDelete({_id: new ObjectID("594b0579491f4dd7f450a88a")}).then(function (res) {
          console.log(res)
      })
  }
  db.close()
})