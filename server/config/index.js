var config          = require('../../config.js'),
    environment     = process.env.NODE_ENV || 'development',
    ConfigManager;

ConfigManager = {
    get: function get(property) {
        var returnValue;

        if (property === 'environment') {
            returnValue = environment;
        } else {
            returnValue = config[environment][property];
        }

        return returnValue;
    }
};

module.exports = ConfigManager;
