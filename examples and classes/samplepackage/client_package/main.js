'use strict';

const logger = require('./classes/CLogHelper');

logger.Init('LogSamplePackage'); // This is the SHORT tag of your package for logmessages and logfilename


// ALL THIS MESSAGES GET SHOWN SERVERSIDE AND GETS LOGGED TO LOGFILE

logger.log('Some Normal log output');

logger.log('Whoops an Error happend', 'error');

logger.log('This info gets shown in green', 'info');

logger.log('Attention this is a warning', 'warn');

logger.log('Yust an debug message', 'debug');