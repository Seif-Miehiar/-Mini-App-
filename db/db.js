var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3500/saifdata');
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!")
});
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("hiii`");
// });
let Schema = mongoose.Schema;
let firstTemplate = new Schema({
    username:  String,
    password: String,
    email: String,
    date: { type: Date, default: Date.now }
  }); 
  let secondTemplate = new Schema({
    line1:  String,
    line2: String,
    city: String,
    state: String,
    zipcode: Number
  }); 
  let thirdTemplate = new Schema({
    creditcard:  Number,
    expirydate: {type: Date},
    cvv: Number,
    billingzipcode: Number
  }); 
  






//   module.exports.save = save
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("We're connected! ^-^");
// });
// let repoSchema = mongoose.Schema({
 
//   name:{type: String, trim: true, unique: true},
//   description:{type: String, trim: true, unique: true},
//   created_at:{type: String, trim: true, unique: true}
// });

// let Repo = mongoose.model('Repo', repoSchema);

//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   let save = (data => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   for (var i = 0 ; i < data.length ; i++){
//     var obj = {
//       name:data[i].name,
//       description:data[i].description,
//       created_at: data[i].created_at
//     }
//     var rebo = new Repo(obj);
//     rebo.save()
// }
// })

// module.exports.save = save;
// module.exports.Repo =Repo;