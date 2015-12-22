var winston = require('winston');

module.exports = function(name, level) {
  return new winston.Logger({
    transports: [
      new winston.transports.Console({ 
        level: level 
      })
    ]
  });
};