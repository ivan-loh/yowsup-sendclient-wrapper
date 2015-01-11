'use strict';

var config       = require('./config/config'),
    EventEmitter = require('events').EventEmitter,
    redis        = require('redis'),
    rClient      = redis.createClient(config.redis.port, config.redis.host);




var yowsup = (function () {

  var sys  = require('sys'),
      exec = require('child_process').exec,
      cmd  = (function () {
        var command = "yowsup-cli demos -l " + config.yowsup.login + ":" +
                                               config.yowsup.password + " -s ";

        return function (to, message) {
          return command + to + " " + message;
        };
      }());

  return function (to, message, done) {
    exec(cmd(to, message), function (err, stdout, stderr) {
      if (err)    { console.error(err); }
      if (stderr) { sys.puts(stderr);   }
      sys.puts(stdout);
      done();
    });
  };

}());




var DELAY = config.delay || 1000,
    QUEUE = config.redis.queue,
    app   = new EventEmitter();

function beat() {
  setTimeout(function () { app.emit('heartbeat'); }, DELAY);
}

function digest(err, content) {

  if (err)     { console.error(err);            }
  if (content) { content = JSON.parse(content); }

  if (content.to && content.message) {
    console.log(content);
    yowsup(content.to, content.message, beat);
  } else {
    beat();
  }

}




app.on('heartbeat', function () {
  rClient.brpop(QUEUE, 0, digest);
});

beat();
