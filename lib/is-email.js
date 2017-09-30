/**
 * @module is-email
 * @description Provides function to check if {String} is an email address.
 * @version 1.0.2
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function isEmail
 * @description Check if {String} is an email address.
 * @param {String} string - String to check.
 * @returns {Boolean} - Determine whether a {String} is an email address.
 */

const isEmail = string => {
  return /.+\@.+\..+/.test(string);
};

/**
 * @public
 * @description Expose function to check if {String} is an email address.
 * @param {String} string - String to check.
 * @returns {Boolean} - Determine whether a {String} is an email address.
 */

module.exports = string => {
  return isEmail(string);
};
