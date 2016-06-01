import logger from './../../utils/logger.js';
import * as actions from './../actions.js';
import store from './../store.js';

module.exports = function commandManager(hz) {
  hz('commands').watch({
    rawChanges: true,
  }).subscribe(
    data => {
      logger.debug('commands watch feed', data);
      const type = data.type;
      console.log(type);
      if (['initial', 'add'].indexOf(type) >= 0) {
        const silent = type === 'initial';
        actions.commandAdd(store, data.new_val, silent);
      }
      if (['remove'].indexOf(type) >= 0) {
        actions.commandRemove(store, data.old_val);
      }
    },
    error => {
      logger.debug('commands watch error', error);
    });
};
