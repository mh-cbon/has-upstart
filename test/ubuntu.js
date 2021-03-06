var should = require('should')

describe('hasUpstart', function() {
  it('returns true on upstart-friendly system', function(done) {
    require('../index.js')(function (err, initctlPath) {
      (err===undefined).should.eql(true);
      (initctlPath).should.match(/initctl$/);
      done();
    })
  });
});
