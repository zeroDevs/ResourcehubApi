const route = require('express').Router();
const { verifyToken } = require('../../utils/verifyToken');

route.get('/', (req, res) => {
  res.send("Facebook oauth");
});

module.exports = route;