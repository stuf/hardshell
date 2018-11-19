const {
  getCenterOffset,
  getTermWidth,
} = require('./shared');

const StatusLine =
  (function _StatusLine () {
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

    function StatusLine(text, label, labelStyleFn = x => x) {
      if (!(this instanceof StatusLine)) {
        return new StatusLine(text, label, labelStyleFn);
      }

      this.text = text;
      this.label = label;
      this.labelStyleFn = labelStyleFn;

      this.options = defaults;
    }

    StatusLine.prototype.getLabel = function () {
      const { label } = this.options;
      const labelText = this.label;
      const [padStart, padEnd] = getCenterOffset(label.width, labelText);

      return ''
        .concat(label.borderLeft)
        .concat(''.padStart(padStart, label.padChar))
        .concat(this.labelStyleFn(labelText))
        .concat(''.padEnd(padEnd, label.padChar))
        .concat(label.borderRight);
    };

    StatusLine.prototype.getLine = function () {
      const columns = getTermWidth();

      const {
        label: labelOpts,
        text: textOpts,
      } = this.options;

      const text = this.text;
      const labelSize = labelOpts.width + 2 + 1;

      return text
        .concat(textOpts.padInner ? ' ' : '')
        .padEnd(columns, textOpts.padChar)
        .slice(0, -labelSize)
        .concat(labelOpts.padInner ? ' ' : '');
    };

    StatusLine.prototype.toString = function () {
        const line = [
          this.getLine(),
          this.getLabel(),
        ].join('');

        return line;
      };

    return StatusLine;
  })();

module.exports.StatusLine = StatusLine;
