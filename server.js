var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// index page
app.get("/", function (req, res) {
  console.log("Hello from nodeJS");
  const message = "Hello node.js";

  const date = new Date();

  const dayOfWeek = date.getDay();

  const today = daysOfWeek[dayOfWeek];
  
  res.render("pages/index", {
    message: message,
    dayOfWeek: dayOfWeek,
    today: today,
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8081);
console.log("Server is listening on port 8081");
