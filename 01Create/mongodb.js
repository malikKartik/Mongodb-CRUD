// CRUD operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017 '
const databaseName = 'task-manager'

var result1 = []

// var p = function(){
// return new Promise(function(resolve, reject) {


MongoClient.connect(connectionURL, {useNewUrlParser: true,useUnifiedTopology: true }, (error,client)=>{
    if(error){
        console.log('Unable to connect to database!')
    }
    else{
        const db = client.db(databaseName)


        // To insert one doc

        // db.collection('users').insertOne({
        //     name: 'Prerna',
        //     age: 20
        // },(error,result)=>{
        //     if(error){
        //     return console.log('unable to insert user')
        // }
        // console.log(result.ops)
        // })


        // To insert many docs
        
        // db.collection('users').insertMany([
        //     {
        //         name:'Jen',
        //         age: 21
        //     },
        //     {
        //         name:'leo',
        //         age: 22
        //     }
        // ],(error,result)=>{
        //     if(error){
        //         return console.log('unable to insert the documents')
        //     }
        //     console.log(result.ops)

        // })



        //Task

        // db.collection('tasks').insertMany([
        //     {
        //         description: 'This is task one',
        //         completed: false
        //     },
        //     {
        //         description: 'This is task two',
        //         completed: true
        //     },
        //     {
        //         description: 'This is task three',
        //         completed: true
        //     }
        // ],(error,result)=>{
        //     if(error){
        //         return console.log('unable to insert')
        //     }
        //     console.log(result.ops)
        // })



        // const collect = db.collection('users').find()
        // collect.each((err,doc)=>{
        //     if(doc!=null){
        //         result = [...result,doc]
        //     }
        //         // console.log(result)
        //     resolve()
        // })
        

    }
    
})


// });

// }
// p().then(function() {

//     console.log(result);
  
//   });