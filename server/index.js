const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
let app = express();
let port = 3000;

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


// // GET method route
// app.get('/api/reviews/', function (req, res) {
//   res.send('GET request to the homepage')
// })

// // POST method route
// app.post('/api/reviews/', function (req, res) {
//   res.send('POST request to the homepage')
// })

// // PUT method route
// app.put('/api/reviews/', function (req, res) {
//   res.send('PUT request to the homepage')
// })

// // DELETE method route
// app.delete('/api/reviews/', function (req, res) {
//   res.send('DELETE request to the homepage')
// })


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
