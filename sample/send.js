'use strict';

var config = require('../config/config'),
    redis  = require('redis'),
    client = redis.createClient(config.redis.port, config.redis.host);


var message = JSON.stringify({
  to: "put the destination number here",
  message: "hello!"
});


client.lpush(config.redis.queue, message, function () {
  console.log('queued for sending');
  client.end();
});