import * as mutations from './mutations-types.js';
import _ from 'lodash';

export const loadFromLocalStorage = (store, state) => {
  store.dispatch(mutations.LOAD_FROM_LOCAL_STORAGE, state);
};

export const removeNotification = (store) => {
  store.dispatch(mutations.NOTIFICATION_REMOVE);
};

export const addNotification = (store, notification, type) => {
  store.dispatch(mutations.NOTIFICATION_ADD, notification, type);
};

export const commandRemove = (store, command) => {
  store.dispatch(mutations.COMMAND_REMOVE, command);
};

export const commandAdd = (store, command, silent = false) => {
  const inStoreBefore = store.state.commands.all.indexOf(command) >= 0;
  store.dispatch(mutations.COMMAND_ADD, command);
  const inStoreAfter = store.state.commands.all.indexOf(command) >= 0;

  if (!silent) {
    if (inStoreBefore && inStoreAfter) {
      addNotification(store, 'not added - already exists', 'message');
    } else if (!inStoreBefore && !inStoreAfter) {
      addNotification(store, 'Error while adding', 'error');
    } else {
      addNotification(store, 'added', 'success');
    }
  }
};
