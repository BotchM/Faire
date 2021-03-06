/**
 * Module dependencies.
 */
const express = require('express');
const chalk = require('chalk');
const socketServer = require('./config/sockets');
const errorHandler = require('errorhandler');
const configs = require('./config/config');
const router = require('./config/routes');

/**
 * Create Express server.x
 */
 var app = express();
 var http = require('http').Server(app);
 var io = require('socket.io')(http);

/**
 * Express configuration.
 */
configs(app);

/**
 * Routing.
 */
 app.use('/', router);

 /**
  * Error Handler.
  */
 app.use(errorHandler());

/**
 * Start Express server.
 */
http.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

/**
 * Socket.io
 */
socketServer(io);

//module.exports = app; //module exported for testing
