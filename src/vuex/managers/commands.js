import logger from './../../utils/logger.js';
import * as actions from './../actions.js';
import store from './../store.js';

module.exports = function commandManager(hz) {
  hz('commands').watch({
    rawChanges: true,
  }).subscribe(
    data => {
      const type = data.type;
      if (['initial', 'add'].indexOf(type) >= 0) {
        console.log(type, data.new_val.command, data);
        const silent = type === 'initial';
        actions.commandAdd(store, data.new_val, silent);
      }
      if (['remove'].indexOf(type) >= 0) {
        console.log(type, data.old_val.command, data);
        actions.commandRemove(store, data.old_val);
      }
    },
    error => {
      logger.debug('commands watch error', error);
    });
};
