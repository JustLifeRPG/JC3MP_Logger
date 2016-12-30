/**
 * @overview Logging Package
 * @author Markus 'MarkusSR1984' Schwitz | Lukas 'lazy' Lotz
 * @copyright (c) Division Wolf e.V. - JustLifeRPG Team
 * @license See LICENSE file
 * @description Central Logging Package - for easy Server and Clientside logging
 */
'use strict';

const helpers = require('./classes/LogService');
const colors = require('colors');
const fs = require('fs');
const os = require('os');

// Logtypes << If you need additional logtypes you can add it here
const logTypeDict = {};
logTypeDict.normal = colors.white;
logTypeDict.error = colors.red;
logTypeDict.debug = colors.grey;
logTypeDict.warn = colors.yellow;
logTypeDict.info = colors.green;

/**
 * Creates the Directory for the logfiles
 */
function createLogFolder() {
    if (!fs.existsSync(helpers.logFolder)) {
        fs.mkdir(helpers.logFolder);
    }
}

/**
 * Writes the logmessage to a specific logfile
 * @param {string} pkgName The name of the package that calls the log event
 * @param {string} massage The Message you want to log
 */
function writeToFile(pkgName, message) {
    createLogFolder();
    const filename = helpers.getLogFilename(pkgName);
    if (fs.existsSync(filename)) {
        fs.appendFile(filename, message + os.EOL, (err) => {
            if (err) {
                console.log(`COULD NOT APPEND LOGFILE ${filename}`.bgRed.white);
            }
        });
    } else {
        fs.writeFile(filename, message + os.EOL, (err) => {
            if (err) {
                console.log(`COULD NOT CREATE LOGFILE ${filename}`.bgRed.white);
            }
        });
    }
}

/**
 * Logs a Message to Console and File
 * @param {string} fromPackage The name of the package that calls the log event
 * @param {string} massage The Message you want to log
 * @param {string} logType The type of the logmessage (normal, debug, warn, info) default = normal
 * @param {bool} isRemotelyCalled Comes this logmessage from a client ?
 */
function handleLogMessage(fromPackage, message, logType, isRemotelyCalled = false) {
    if (logTypeDict[logType] === undefined) {
        const msg = `[${helpers.getTimeStamp()}] [${((isRemotelyCalled) ? 'REMOTE:' : '') + fromPackage}] [ERROR] Invalid logtype ${logType.toUpperCase()} for message ${message}`;
        console.log(logTypeDict.error(msg));
        writeToFile(fromPackage, msg);
    } else {
        const msg = `[${helpers.getTimeStamp()}] [${((isRemotelyCalled) ? 'REMOTE:' : '') + fromPackage}] [${logType.toUpperCase()}] ${message}`;
        console.log(logTypeDict[logType](msg));
        writeToFile(fromPackage, msg);
    }
}

// Lets Handle some events

/**
 * Checks Logger availability for other packages
 */
jcmp.events.Add('log_active', () => {
    return true;
});

/**
 * Logs a Message to Console and File if Loggingpackage is aviable
 * @param {string} fromPackage The name of the package that calls the log event
 * @param {string} massage The Message you want to log
 * @param {string} logType The type of the logmessage (normal, debug, warn, info) default = normal
 */
jcmp.events.Add('log', (fromPackage, message, logType = 'normal') => {
    handleLogMessage(fromPackage, message, logType);
});

/**
 * Logs a Message to Console and File if Logginpackage is aviable
 * @param {string} fromPackage The name of the package that calls the log event
 * @param {string} massage The Message you want to log
 * @param {string} logType The type of the logmessage (normal, debug, warn, info) default = normal
 */
jcmp.events.AddRemoteCallable('log', (fromPackage, message, logType = 'normal') => {
    handleLogMessage(fromPackage, message, logType, true);
});
