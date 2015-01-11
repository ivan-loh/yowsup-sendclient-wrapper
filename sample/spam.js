'use strict';

var config = require('../config/config'),
    async  = require('async');



var yowsup = (function () {

  var sys  = require('sys'),
      exec = require('child_process').exec,
      cmd  = (function () {
                var command = "yowsup-cli demos -l " + config.yowsup.login    + ":" +
                                                       config.yowsup.password + " -s ";

                return function (to, message) {
                  return command + to + " \"" + message + "\"";
                };
              }());


  return function (to, message, done) {
    exec(cmd(to, message), function (err, stdout, stderr) {
      if (err) {
        console.error(err);
      }
      if (stderr) {
        sys.puts(stderr);
      }
      sys.puts(stdout);
      done();
    });
  };


}());




var count  = 0,
    LIMIT  = 50,
    TARGET = "some number";

async.whilst(
  function check() { return count < LIMIT; },
  function exec(done) {

    yowsup(TARGET, Date.now() + "\tkang!", function (){
      count = count + 1;
      done();
    });

  },
  function error(err) { console.log(err); }
);
