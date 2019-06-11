const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
let app = express();
let port = 3000;

// const db = require("../database/index.js");
const db = require('../database/index.js');

app.use(cors());

app.use(bodyparser.json());
app.use(express.static(__dirname + "/../client/dist"));

// // GET method route to return reviews related to sku number
// 127.0.0.1:3000/api/reviews/38
app.get("/api/reviews/:sku", (req, res) => {
  let shoe = req.params.sku;
  shoe = parseInt(shoe);

  let myQuery = `SELECT * FROM sole WHERE sku = ${shoe};`;
  db.query(myQuery, (err, data) => {
    if (err) {
      console.log("error getting reviews: ", err);
    } else {
      console.log('success returning data from postgreSQL');
      res.send(data.rows);
    }
  });
});

// POST method route
// add a review
app.post('/api/reviews/:sku', (req, res) => {
  let shoe = req.params.sku;
  shoe = parseInt(shoe);
  let myQuery = `INSERT INTO sole (sku, "user", date, title, description) VALUES (${shoe},'${req.body.user}','${req.body.date}','${req.body.title}','${req.body.description}')`;
  //`INSERT INTO sole (sku, user, date, title, description) VALUES (10, "chad", "lorem", "lorem", "lorem");`
  //`INSERT INTO sole (description) VALUES ("lorem");`
  console.log('query query:', myQuery);
  db.query(myQuery, (err, data) => {
    if (err) {
      console.log("error posting a review: ", err);
    } else {
      console.log('success returning data from postgreSQL');
      res.status(201).send('success creating a review');
    }
  });
})

// // PUT method route
// db.update one
app.put('/api/reviews/:id', function (req, res) {


})

// // DELETE method route
// findone and deletye
app.delete('/api/reviews/:id', function (req, res) {

  let shoeId = req.params.id;
  console.log(shoeId);
  shoeId = parseInt(shoeId);
  let myQuery = `DELETE FROM sole WHERE id = ${shoeId};`;
  db.query(myQuery, (err, data) => {
    if (err) {
      console.log("error getting reviews: ", err);
    } else {
      console.log('success deleting data from postgreSQL');
      res.send(`Shoe with the ID of ${shoeId} was successfully deleted!`);
    }
  });

})


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
