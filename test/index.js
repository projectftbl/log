var should = require('chai').should()
  , sut = require('../lib');
  
describe('Logger', function() {
		
  it('should have .info function', function() {
    sut.info.should.be.a('function');
  });
			
  it('should have .warn function', function() {
    sut.warn.should.be.a('function');
  });
			
  it('should have .error function', function() {
    sut.error.should.be.a('function');
  });
			
  it('should have .debug function', function() {
    sut.debug.should.be.a('function');
  });
			
  it('should have default log level', function() {
    sut.level.should.equal('info');
  });
	
});
