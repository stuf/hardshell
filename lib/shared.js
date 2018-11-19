const B = (f, g) => a => f(g(a));
const I = a => a;

const getCenterOffset = (w, str) => {
  const pad = w - str.length;
  const padStart = Math.floor(pad / 2);
  const padEnd = pad - padStart;

  return [padStart, padEnd];
}

const getTermWidth = () => process.stdout.columns || 80;

module.exports = {
  B,
  I,
  getCenterOffset,
  getTermWidth,
};
