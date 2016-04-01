var should = require('should')

describe('hasUpstart', function() {
  it('returns false on upstart-friendly system', function(done) {
    require('../index.js')(function (err, initctlPath) {
      (err===undefined).should.be.false;
      (initctlPath===undefined).should.be.true;
      done();
    })
  });
});
