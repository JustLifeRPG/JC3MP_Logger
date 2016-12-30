/**
 * @overview Logging Package
 * @author Markus 'MarkusSR1984' Schwitz | Lukas 'lazy' Lotz
 * @copyright (c) Division Wolf e.V. - JustLifeRPG Team
 * @license See LICENSE file
 * @description Log Helper Class
 */

'use strict';

module.exports = {
    log: log,
    Init: Init
};

let isLogPackageAviable = false;
let packagelogname = 'NO PACKAGENAME DEFINED';

/**
 * Logs a Message to Console and File if Logginpackage is aviable
 * @param {string} massage The Message you want to log
 * @param {string} type The type of the logmessage (normal, debug, warn, info) default = normal
 */
function log(message, type = 'normal') {
    if (isLogPackageAviable) {
        jcmp.events.Call('log', packagelogname, message, type);
    } else {
        console.log(`[${packagelogname}] [${type.toUpperCase()}]: ${message}`);
    }
}

/**
 * Checks if the Logger Package is aviable at this JC3MP Server
 * @param {string} packname The short name of your Package that should be shown in log output
 */
function Init(packname) {
    packagelogname = packname;
    isLogPackageAviable = jcmp.events.Call('log_active', '')[0];
}