const mongoose = require('mongoose');
const express = require('express');

const app = express();

const port = 8001;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require('./web/db/index.js');

// import routes
const authRoute = require('./web/routes/auth/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/auth', authRoute);

db.connect()
  .then(() => console.log("db connected"));

app.listen(port, function() {
  console.log("Server is running on port:", port);
});