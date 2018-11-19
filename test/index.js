const test = require('ava');

const HS = require('../lib');

const getOK = () => HS.lineOK('This is OK');
const getFail = () => HS.lineFail('This will fail');

test('lineOK does not throw', t => t.notThrows(getOK));

test('lineOK is formatted', t => t.true(/^This is OK/.test(getOK())));

test('lineFail does not throw', t => t.notThrows(getFail));

test('lineFail is formatted', t => t.true(/^This will fail/.test(getFail())));
