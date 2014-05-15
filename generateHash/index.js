'use strict';

var crypto = require('crypto');

var  makeHash = exports.makeHash =  function(str, secret) {
  return crypto.createHmac('sha256', secret).update(str).digest('base64');
};

exports.generate = function(key, secret) {
  if (typeof key !== 'string' || typeof secret !== 'string') {
    throw new Error('Only strings allowed');
  }
  var epoch = Math.round(new Date().getTime() / 1000);
  var hash = makeHash(key + epoch, secret);
  return  key + ':' + hash + ':' + epoch;
};

exports.getQueryHash = function(key, secret) {
  return encodeURIComponent(exports.generate(key, secret));
};

exports.getHeaderHash = function(key, secret) {
  return 'A5-API ' + exports.generate(key, secret);
};
