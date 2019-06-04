const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
let app = express();
let port = 3008;

const mongo = require("../database/index.js");

app.use(cors());

app.use(bodyparser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/reviews", (req, res) => {
  res.header("Access-Control-Allow-Origin");
  mongo.findAll({}, (err, reviews) => {
    if (err) {
      console.log("error inside findall: ", err);
    } else {
      console.log("server side get complete");
      res.send(reviews);
    }
  });
});

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

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
