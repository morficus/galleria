'use strict';

var express = require('express'),
    server = express(),
    morgan = require('morgan'),
    config = require('./config'),
    models = require('./models');

server.get('/', function () {
    // TODO: handle base API call
});

module.exports = server;
