var config = require('./config/config'),
    async  = require('async'),
    yowsup = (function () {

                var sys  = require('sys'),
                    exec = require('child_process').exec,
                    cmd  = (function () {
                      var command = "yowsup-cli demos -l " + config.yowsup.login + ":" +
                                                             config.yowsup.password + " -s ";

                      return function (to, message) {
                        return command + to + " \"" + message + "\"";
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




var count = 0;
async.whilst(
  function check() { return count < 10; },
  function exec(done) {

    yowsup("put some poor soul's number here", " Hi! " + Date.now(), function (){
      console.log(arguments);
      done();
    });

  },
  function error(err) { console.log(err); }
);
