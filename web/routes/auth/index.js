const route = require('express').Router();

// oauth routes
const twitterAuth = require('./twitter.auth');
const discordAuth = require('./discord.auth');
const githubAuth = require('./github.auth');
const facebookAuth = require('./facebook.auth');

route.use('/twitter', twitterAuth);
route.use('/discord', discordAuth);
route.use('/github', githubAuth);
route.use('/facebook', facebookAuth);

module.exports = route;