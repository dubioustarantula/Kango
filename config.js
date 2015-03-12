var config = {
  development: {
    server: {
      port: 3000
    },
    // database: {
    //   url: 'mongodb://localhost/greenfield_dev'
    // }
  },
  testing: {
    server: {
      port: 3001
    },
    // database: {
    //   url: 'mongodb://localhost/greenfield_test'
    // }
  },
  production: {
    server: {
      port: process.env.port
    },
    // database: {
    //   url: 'mongodb://localhost/greenfield'
    // }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
