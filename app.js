const mongoose = require('mongoose');
const express = require('express');

const app = express();

const port = 8001;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// import routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// initialize db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to the database"));

app.use(cors());



app.listen(port, function() {
  console.log("Server is running on port:", port);
});