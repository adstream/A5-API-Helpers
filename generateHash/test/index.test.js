'use strict';


var should = require('should');

var generateHash = require('../index');


describe('exports.generate', function () {
  describe('when given integers', function () {
    it('should throw an error ', function () {
      (function() {
         generateHash.generate(1, 2);
      }).should.throwError();
    });
  });
});

describe('exports.getHeaderHash', function () {
  describe('when called', function () {
    var out = generateHash.getHeaderHash('some', 'value');
    it('should add A5-API to the start of the auth string', function () {
      out.slice(0, 7).should.equal('A5-API ');
    });
  });
});

describe('exports.getHeaderHash', function () {
  describe('when called', function () {
    var out = generateHash.getQueryHash('some', 'value');
    it('should not add the A5-API string.', function () {
      out.slice(0, 7).should.not.equal('A5-API ');
    });
  });

});
