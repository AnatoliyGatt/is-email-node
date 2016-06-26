/**
 * @module index
 * @description Entry point for is-email-node module.
 * @version 1.0.2
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @description Expose function to check if {String} is an email address.
 * @returns {Function} - Function to check if {String} is an email address.
 */

module.exports = require('./lib/is-email');
