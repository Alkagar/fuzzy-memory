// import store from './store.js';

export const ADD_COMMAND = ({ dispatch }, command) => {
  dispatch('ADD_COMMAND', command);
};

export const removeNotification = ({ dispatch }) => {
  dispatch('NOTIFICATION_REMOVE');
};

export const addNotification = ({ dispatch }, notification, type) => {
  dispatch('NOTIFICATION_ADD', notification, type);
};
