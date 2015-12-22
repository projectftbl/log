var winston = require('winston');

module.exports = function(name, level) {
  var filename = 'logs/' + name + '.log';
  
  winston.add(winston.transports.File, { level: level, filename: filename });
  
  return winston;
};
