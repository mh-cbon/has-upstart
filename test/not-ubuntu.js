var should = require('should')

describe('hasUpstart', function() {
  it('returns false on upstart-friendly system', function(done) {
    require('../index.js')(function (err, initctlPath) {
      (err===undefined).should.eql(false);
      (initctlPath===undefined).should.eql(true);
      done();
    })
  });
});
