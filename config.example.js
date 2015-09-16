var path = require('path'),
    config;

config = {
    production: {
        database: {
            host: '127.0.0.1',
            user: '',
            password: '',
            db_name: 'galleria-prod'
        },
        server: {
            host: '127.0.0.1',
            port: 3444
        }
    },
    testing: {
        database: {
            host: '127.0.0.1',
            user: '',
            password: '',
            db_name: 'galleria-test'
        },
        server: {
            host: '127.0.0.1',
            port: 3445
        }
    },
    development: {
        database: {
            host: '127.0.0.1',
            user: '',
            password: '',
            db_name: 'galleria-dev'
        },
        server: {
            host: '127.0.0.1',
            port: 3446
        }
    }
};

module.exports = config;
