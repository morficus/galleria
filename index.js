

var express = require('express'),
    app = require('./server'),
    server = express(),
    morgan = require('morgan'),
    config = require('./server/config'),
    serverConfig = config.get('server');

// grab the port number from the environemnt settings, otherwise fall back to the config file
serverConfig.port = process.env.PORT || serverConfig.port;

if (config.get('environment') === 'production') {
    server.use(morgan('combined'));
} else {
    server.use(morgan('dev'));
}

server.use('/api', app);

server.listen(serverConfig.port, serverConfig.host, function () {
    'use strict';
    console.log(`Galleria is up an running at http://${serverConfig.host}:${serverConfig.port}`);
});
