var winston = require('winston')
  , configuration = require('@recipher/configuration')
  , papertrail = require('winston-papertrail').Papertrail
  , pkg = require(process.cwd() + '/package.json');

module.exports = function(name, level) {
  var options = {
    host            : configuration('papertrail:host') 
  , port            : configuration('papertrail:port')
  , hostname        : process.env.NODE_ENV
  , program         : name + '-' + pkg.version
  , level           : level
  , maximumAttempts : 10
  };

  winston.add(papertrail, options);
  
  return winston;
};
