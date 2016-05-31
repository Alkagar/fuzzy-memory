'use strict';

module.exports = {
  error: function error(...args) {
    console.error.apply(console, args); // eslint-disable-line no-console
  },
  debug: function debug(...args) {
    console.debug.apply(console, args); // eslint-disable-line no-console
  },
};
