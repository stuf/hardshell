/**
 * @module Shared
 */

/**
 * Compose two functions `f` and `g` into a single function `h`.
 *
 * @function
 * @param {function} f Function that transforms `b` to `c`
 * @param {function} g Function that transforms `a` to `b`
 * @return {function} Function composition of `f ∘ g`
 * @sig (b -> c) -> (a -> b) -> a -> c
 */
const B = (f, g) => a => f(g(a));

/**
 * Identity function that returns whatever value it was given
 *
 * @function
 * @param {any} a
 * @return {any}
 * @sig a -> a
 */
const I = a => a;

/**
 * Get the number of characters to offset from the start and end to
 * center the given string inside of the given width
 *
 * @param {number} width Area width
 * @param {string} str String to calculate offsets for
 * @return {Array.<number>} Tuple containing the offset of the string from the start and end of the area
 * @sig (Number, String) -> [Number, Number]
 */
const getCenterOffset = (width, str) => {
  const pad = width - str.length;
  const padStart = Math.floor(pad / 2);
  const padEnd = pad - padStart;

  return [padStart, padEnd];
}

/**
 * Get terminal width in characters
 *
 * @function
 * @param {number} [fallback=80] Fallback value for terminal width
 * @return {number} Terminal width or fallback value if width can not be determined
 * @sig () -> Number
 */
const getTermWidth = (fallback = 80) => process.stdout.columns || fallback;

/**
 * @function
 * @param {object} o1
 * @param {object} o2
 * @sig (Object, Object) -> Object
 */
const merge = (o1, o2) => Object.assign({}, o1, o2);

const mergeAll = (...os) => os.reduce(Object.assign.apply)

//

module.exports = {
  B,
  I,
  getCenterOffset,
  getTermWidth,
  merge,
};
