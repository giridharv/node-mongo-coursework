var MongoDbClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
MongoDbClient.connect('mongodb://localhost:27017/TodoApp',function (err,db) {
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Connected successfully")
        db.collection('Todos').findOneAndUpdate({_id: new ObjectId("594b135c491f4dd7f450ac94")},
            {
                $set :{
                    completed :true
                }
            },
            {returnOriginal:false}
            ).then(function (res) {
            console.log(res)
        })
        db.collection('Users').findOneAndUpdate({name:'Giridhar'},{
            $inc:{
                age: 2
            }
        },
            {
                returnOriginal:false
            }).then(function (res) {
            console.log(res)
        })
        db.collection('Users').findOneAndUpdate({name:'Suresh'},{
            $set:
                {
                    name:'Harish'
                }
        },
            {
                returnOriginal:false

            }).then(function (res) {
            console.log(res)
        })
        db.collection('Users').findOneAndUpdate({name: 'Harish'},
            {
                $rename:
                    {
                        name : 'Name'
                    }
            },
            {
                returnOriginal:false
            }).then(function (res) {
            console.log(res)
        })

    }
    db.close()
})