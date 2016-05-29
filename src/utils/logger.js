'use strict';

module.exports = {
  error: function error(...args) {
    console.log.apply(console, args); // eslint-disable-line no-console
  },
};
