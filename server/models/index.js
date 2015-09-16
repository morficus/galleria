'use strict';

var mongoose            = require('mongoose'),
    config              = require('../config'),

    dbInfo              = config.get('database'),
    mongoOptions        = {db: {safe: true}},
    connectionString    = 'mongodb://' + dbInfo.host + '/' + dbInfo.db_name;

exports.boot = function () {
    // connection logging
    mongoose.connect(connectionString, mongoOptions, function (err, res) {
        if (err) {
            console.log ('ERROR connecting to: ' + connectionString + '. ' + err);
        } else {
            console.log ('Successfully connected to: ' + connectionString);
        }
    });
};
