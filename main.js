const express = require("express");
const app = express();
const path = require("path");
let fetch = require("node-fetch");
var Datastore = require('nedb');
const { json } = require("express");
const db = new Datastore("myDatabase");
db.loadDatabase();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/homepage.html"));
});

app.get("/food", async function (req, res) {
  const url = "https://api.spoonacular.com/recipes/findByIngredients?";
  let apiKey = "2b0b42e86b094497873ff72810cd0bfd";
  const ingrediants = req.query.ingrediants;
  let apiRequest = `${url}apiKey=${apiKey}&ingredients=${ingrediants}`;
  const response = await fetch(apiRequest);
  const body = await response.json();
  res.send(body);
});

app.post("/send", function (req, res) {
  db.insert(req.body)
  res.sendStatus(200);
});

app.get("/complaints", function (req, res) {
  db.find({}, (err, doc)=>{
    res.json(doc)
  })
});
