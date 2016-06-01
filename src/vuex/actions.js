import * as mutations from './mutations-types.js';
import _ from 'lodash';
import hz from './../hz.js';
import logger from './../utils/logger.js';
import {
  commandInStore,
} from './../helpers/helpers.js';

export const loadFromLocalStorage = (store, state) => {
  store.dispatch(mutations.LOAD_FROM_LOCAL_STORAGE, state);
};

export const removeNotification = (store) => {
  store.dispatch(mutations.NOTIFICATION_REMOVE);
};

export const addNotification = (store, notification, type) => {
  store.dispatch(mutations.NOTIFICATION_ADD, notification, type);
};

export const commandRemoveFromDB = (store, command) => {
  console.log('remove', command);
  hz('commands').remove(command).subscribe(
    id => {
      logger.debug('Item removed', id);
      addNotification(store, 'Item removed from rethinkdb.', 'message');
    },
    error => {
      logger.error(error);
      addNotification(store, `Uppss... error... ${error}`, 'error');
    });
};

export const commandSave = (store, command) => {
  if (!commandInStore(store.state.commands.all, command)) {
    addNotification(store, 'Command already in store.', 'error');
  } else {
    hz('commands').store(command).subscribe(
      id => {
        logger.debug('Item saved', id);
        addNotification(store, 'Item saved in rethinkdb.', 'success');
      },
      error => {
        logger.error(error);
        addNotification(store, `Uppss... error... ${error}`, 'error');
      });
  }
};

export const commandRemove = (store, command) => {
  store.dispatch(mutations.COMMAND_REMOVE, command);
};

export const commandAdd = (store, command, silent = false) => {
  if (commandInStore(store.state.commands.all, command)) {
    if (!silent) {
      addNotification(store, 'Command already in store.', 'message');
    }
  } else {
    store.dispatch(mutations.COMMAND_ADD, command);
    if (!silent) {
      addNotification(store, 'Command added to awesome list!', 'success');
    }
  }
};
