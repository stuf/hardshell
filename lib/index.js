const colors = require('colors');

const { StatusLine } = require('./hardshell');
const { LABEL_OK, LABEL_FAIL } = require('./constants');

//

const lineOK = msg => StatusLine(msg, LABEL_OK, colors.green).toString();
const lineFail = msg => StatusLine(msg, LABEL_FAIL, colors.red).toString();

//

module.exports = {
  lineOK,
  lineFail,
  StatusLine,
};
