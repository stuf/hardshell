/**
 * @namespace HardShell
 * @module Index
 */
const colors = require('colors');

const { StatusLine } = require('./status-line');
const { LABEL_OK, LABEL_FAIL } = require('./constants');

//
/**
 * @summary Shorthand to create line indicating success
 * @function
 * @param {string} msg
 * @return {string}
 */
const lineOK = msg => StatusLine(msg, LABEL_OK, colors.green).toString();

/**
 *
 * @summary Shorthand to create line indicating failure
 * @function
 * @param {string} msg
 * @return {string}
 */
const lineFail = msg => StatusLine(msg, LABEL_FAIL, colors.red).toString();

//

module.exports = {
  lineOK,
  lineFail,
  StatusLine,
};
