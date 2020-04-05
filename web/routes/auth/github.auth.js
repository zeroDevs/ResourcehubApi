const route = require('express').Router();
const { verifyToken } = require('../../utils/verifyToken');

route.get('/', (req, res) => {
  res.send("GitHub oauth");
});

module.exports = route;