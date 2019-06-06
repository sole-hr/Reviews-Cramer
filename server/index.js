const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
let app = express();
let port = 3000;

const mongo = require("../database/index.js");

app.use(cors());

app.use(bodyparser.json());
app.use(express.static(__dirname + "/../client/dist"));

// app.get("/reviews", (req, res) => {
//   res.header("Access-Control-Allow-Origin");
//   mongo.findAll({}, (err, reviews) => {
//     if (err) {
//       console.log("error inside findall: ", err);
//     } else {
//       console.log("server side get complete");
//       res.send(reviews[0]);
//     }
//   });
// });

// app.get(
//   "graph.facebook.com / 17873440459141021 / top_media ? user_id = 17841405309211844 & fields=id, media_type, comments_count, like_count",
//   (req, res) => {
//     if (err) {
//       console.log("error retrieving insta", err);
//     } else {
//       console.log(req);
//       res.send("got it");
//     }
//   }
// );


// // GET method route
app.get("/api/reviews", (req, res) => {
  res.header("Access-Control-Allow-Origin");
  mongo.findAll({}, (err, reviews) => {
    if (err) {
      console.log("error inside findall: ", err);
    } else {
      console.log("server side get complete");
      res.send(reviews[0]);
    }
  });
});

// POST method route
// insert a record in collection
app.post('/api/reviews', function (req, res) {

  console.log('body is ',req.body);

  mongo.create(req.body)
      .then((data)=>{
        res.send('POST request to the homepage', data);
      })
      .catch((err)=>{
        reject('error in post request', err);
    })
})

// // PUT method route
// mongo.update one
app.put('/api/reviews', function (req, res) {

  console.log('body is ',req.body);

  mongo.update({_id:id},{$set:{name:user.name,state:user.state}},{multi:true,new:true})
    .then((docs)=>{
      if(docs) {
        resolve({success:true, data:docs});
        res.send('PUT request to the homepage')
      } else {
        reject({success:false,data:"no such user exist"});
      }
    })
    .catch((err)=>{
        reject('error updating ', err);
    })

})

// // DELETE method route
// findone and deletye
app.delete('/api/delete', function (req, res) {

  console.log('body is ',req.body);
  mongo.remove({_id: id})
    .then((docs)=>{
      if(docs) {
        resolve({"success":true,data:docs});
        res.send('DELETE request to the homepage')
      } else {
        reject({"success":false,data:"no such user exist"});
      }
    })
    .catch((err)=>{
     reject('error deleting', err);
  })

})


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
