var env    = process.env.NODE_ENV || 'development',
    config = {
      development: {
        delay: 1000, // Delay in milisecond
        yowsup: {
          login: "your number here",
          password: "your password here"
        },
        redis: {queue: "yowq", port: 6379, host: 'localhost'}
      },

      demo: {
        delay: 1000, // Delay in milisecond
        yowsup: {
          login: "your number here",
          password: "your password here"
        },
        redis: {queue: "yowq", port: 6379, host: 'localhost'}
      },

      staging: {
        delay: 1000, // Delay in milisecond
        yowsup: {
          login: "your number here",
          password: "your password here"
        },
        redis: {queue: "yowq", port: 6379, host: 'localhost'}
      },

      production: {
        delay: 1000, // Delay in milisecond
        yowsup: {
          login: "your number here",
          password: "your password here"
        },
        redis: {queue: "yowq", port: 6379, host: 'localhost'}
      }

    };

process.env.NODE_ENV   = env;
module.exports = config[env];
