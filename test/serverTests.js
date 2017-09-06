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

  it('should return 200', function (done) {
    var options = {
      url: 'http://localhost:4000',
      headers: {
        'Content-Type': 'text/plain'
      }
    };
    request.get(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('something here');
      done();
    });
  });

  it('should emit request body', function (done) {
    var options = {
      url: 'http://localhost:8000',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: 'request received'
    };
    var eventFired = false;

    request.get(options, function (err, res, body) {});

    server.on('success', function (data) {
      eventFired = true;
      expect(data).to.equal('request received');
    });

    setTimeout( function () {
      expect(eventFired).to.equal(true);
      done();
    }, 10);
  });
  it('should set params', function(done) {
    .get('/')
    .query({name: 'mutsa'})
  })
});
