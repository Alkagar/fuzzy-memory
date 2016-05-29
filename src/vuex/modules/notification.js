import {
  NOTIFICATION_REMOVE,
  NOTIFICATION_ADD,
} from '../mutations-types.js';

const state = {
  msg: null,
  type: null,
  time: null,
};

const mutations = {
  [NOTIFICATION_REMOVE](state) {
    state.msg = null;
    state.type = null;
    state.time = null;
  },
  [NOTIFICATION_ADD](state, notification, type) {
    state.msg = notification;
    state.type = type;
    state.time = Date.now();
  },
};

export default {
  state,
  mutations,
};
