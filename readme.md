## @recipher/log

Log helper with sane defaults. 

### Usage

Logs to the console by default.

Use configuration to log to file:

```json
{
  "LOGGING": "file"
}
```

Or to Papertrail:

```json
{
  "LOGGING": "papertrail"
, "PAPERTRAIL": {
    "HOST": "..."
  , "PORT": 1234
  }
}
```

To write to the log:

```javascript
var log = require('@recipher/log');

log.info('Information');
log.warn('Warning');
log.error('Error');
log.debug('Debug');
```