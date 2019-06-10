const { Pool, Client } = require('pg');
const postgressInfo = require('./postgresInfo');

const pool = new Pool({
  user: postgressInfo.user,
  host: postgressInfo.host,
  database: postgressInfo.database,
  password: postgressInfo.password,
  port: postgressInfo.port,
})

pool.connect((err, success) => {
  if(err){
    console.log('error connecting to postgress db:', err);
  } else {
    console.log('success connecting to postgres db');
  }
})


// const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost/sdc', {useNewUrlParser: true}, (err) => {
//   if(err){
//       console.log('error connecting to mongodb: ', err);
//   } else {
//       console.log("successful connection to mongodb");
//   }
// });

// let reviewSchema = mongoose.Schema({
//   sku: Number,
//   user: String,
//   date: String,
//   title: String,
//   description: String
// });

// let customerReview = mongoose.model("customerReview", reviewSchema, 'sole');

// let save = (file, callBack) => {
//   customerReview.insertMany(file, (err, res) => {
//     if (err) {
//       console.log(err, null);
//     } else {
//       console.log(err);
//     }
//   });
// };

// let findAll = (obj, callBack) => {
//   customerReview.find(obj, function(err, docs) {
//     if (err) {
//       console.log("I AM GETTING AN ERROR");
//     } else {
//       console.log("sucess retrieving database stuff");
//       callBack(null, docs);
//     }
//   });
// };

// customerReview.create(reviews, (err)=>{
//   if (err){
//     console.log(err)
//   }else{
//     console.log('success')
//   }
// })

// save(reviews)

// module.exports.findAll = findAll;
// module.exports.save = save;
// module.exports = customerReview;
module.exports = pool;