const mongoose = require("mongoose");
// const reviews = require("../../shoe-data-generator/shoeData.json");
// const uri = require("../password.js");
// const dbinfo = require('./atlasinfo.js');

mongoose.connect('mongodb://localhost/sdc', {useNewUrlParser: true}, (err) => {
  if(err){
      console.log('error connecting to mongodb: ', err);
  } else {
      console.log("successful connection to mongodb");
  }
});

// mongoose.connect(dbinfo.uri, {useNewUrlParser: true}, (err) => {
//   if(err){
//       console.log('error connecting to mongodb: ', err);
//   } else {
//       console.log("successful connection to mongodb");
//   }
// });

let reviewSchema = mongoose.Schema({
  sku: String,
  reviews: [
    {
      user: String,
      date: String,
      stars: String,
      title: String,
      description: String
    }
  ]
});

let customerReview = mongoose.model("customerReview", reviewSchema);

let save = (file, callBack) => {
  customerReview.insertMany(file, (err, res) => {
    if (err) {
      console.log(err, null);
    } else {
      console.log(err);
    }
  });
};

let findAll = (obj, callBack) => {
  customerReview.find(obj, function(err, docs) {
    if (err) {
      console.log("I AM GETTING AN ERROR");
    } else {
      console.log("sucess retrieving database stuff");
      callBack(null, docs);
    }
  });
};

// customerReview.create(reviews, (err)=>{
//   if (err){
//     console.log(err)
//   }else{
//     console.log('success')
//   }
// })

// save(reviews)

module.exports.findAll = findAll;
module.exports.save = save;
