const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { use } = require("./Routes/users");

app.use(bodyParser.json());

//Import Route
const usersRoute = require("./Routes/users");

app.use("/users", usersRoute);

//ROUTE
app.get("/", (req, res) => {
  res.send("welcome to home");
});

//Connect to database
mongoose.connect("mongodb://127.0.0.1:27017/User", () => {
  console.log("hello you are connected");
});

//how to we start listening to thr serve
app.listen(3000);
