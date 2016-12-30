/**
 * @overview Logging Package
 * @author Markus 'MarkusSR1984' Schwitz | Lukas 'lazy' Lotz
 * @copyright (c) Division Wolf e.V. - JustLifeRPG Team
 * @license See LICENSE file
 * @description Logging Proxy to ensure same loggin syntax at server and client
 */
'use strict';

jcmp.events.Add('log_active', () => {
    return true;
});

jcmp.events.Add('log', (fromPackage, message, logType) => {
    jcmp.events.CallRemote('log', fromPackage, message, logType);
});
