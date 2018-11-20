/**
 * @module StatusLine
 */
const {
  getCenterOffset,
  getTermWidth,
} = require('./shared');

const I = x => x;

const StatusLine =
  (function _StatusLine () {
    const OPTIONS = Symbol('options');
    const TEXT = Symbol('text');
    const LABEL = Symbol('label');
    const LABEL_FORMATTER = Symbol('labelStyleFn');

    const defaults = {
      label: {
        width: 6,
        padChar: ' ',
        borderLeft: '[',
        borderRight: ']',
        padInner: true,
      },
      text: {
        padChar: '.',
        padInner: true,
      },
    };

    /**
     * Base class for creating a status line that represents the result of
     * some executed task.
     *
     * @constructs StatusLine
     * @memberof HardShell
     * @param {string} text
     * @param {string} label
     * @param {function} [labelStyleFn=I]
     */
    function StatusLine(text, label, labelStyleFn = x => x) {
      if (!(this instanceof StatusLine)) {
        return new StatusLine(text, label, labelStyleFn);
      }

      this[TEXT] = text;
      this[LABEL] = label;
      this[LABEL_FORMATTER] = labelStyleFn;
      this[OPTIONS] = defaults;
    }

    /**
     * Get the formatted string representation of this StatusLine's label.
     *
     * @return {string}
     * @memberof StatusLine
     */
    StatusLine.prototype.getLabel = function () {
      const { label } = this[OPTIONS];
      const labelText = this[LABEL];
      const [padStart, padEnd] = getCenterOffset(label.width, labelText);

      return ''
        .concat(label.borderLeft)
        .concat(''.padStart(padStart, label.padChar))
        .concat(this[LABEL_FORMATTER](labelText))
        .concat(''.padEnd(padEnd, label.padChar))
        .concat(label.borderRight);
    };

    /**
     * Gets a version of the [StatusLine]{@link StatusLine} that will be used
     * for output.
     *
     * @memberof StatusLine
     * @return {string}
     */
    StatusLine.prototype.getLine = function () {
      const columns = getTermWidth();

      const {
        label: labelOpts,
        text: textOpts,
      } = this[OPTIONS];

      const text = this[TEXT];
      const labelSize = labelOpts.width + 2 + 1;

      return text
        .concat(textOpts.padInner ? ' ' : '')
        .padEnd(columns, textOpts.padChar)
        .slice(0, -labelSize)
        .concat(labelOpts.padInner ? ' ' : '');
    };

    /**
     * @memberof StatusLine
     * @return {string}
     */
    StatusLine.prototype.toString = function () {
      return ''
        .concat(this.getLine())
        .concat(this.getLabel());
    };

    return StatusLine;
  })();

module.exports.StatusLine = StatusLine;
