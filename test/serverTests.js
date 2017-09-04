var server = require('../lib/server.js');
var expect = require('chai').expect;
var request = require('request');

describe('server response', function() {
  before(function () {
    server.listen(4000);
  });

  after(function () {
    server.close();
  });

  it('should return 400', function (done) {
    request.get('http://localhost:4000', function (err, res, body){
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.equal('nothing here');
      done();
    });
  });
});
