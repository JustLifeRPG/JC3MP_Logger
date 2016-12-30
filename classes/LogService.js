/**
 * @overview Logging Package
 * @author Markus 'MarkusSR1984' Schwitz & lazy
 * @copyright (c) Division Wolf e.V. - JustLifeRPG Team
 * @license See LICENSE file
 * @description Some Little formatig helpers
 */
'use strict';

const path = require('path');
const moment = require('moment');

const logFolder = 'log';
module.exports.logFolder = logFolder;

function getTimeStamp() {
    const timestamp = moment().format('YYYY/MM/DD_HH:mm:ss');
    return timestamp;
}
module.exports.getTimeStamp = getTimeStamp;

function getLogFilename(packageName) {
    const datestamp = moment().format('YYYY_MM_DD');
    return path.join(logFolder, `/JCMP_${packageName}_Log_${datestamp}.log`);
}
module.exports.getLogFilename = getLogFilename;

