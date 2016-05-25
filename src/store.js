import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  commands: [
    'get',
    'set',
  ],
  notification: null,
  notificationType: null,
  notificationTime: null,
};

const mutations = {
  ADD_COMMAND: function ADD_COMMAND(actualState, command) {
    actualState.commands.push(command);
  },
  NOTIFICATION_REMOVE: function NOTIFICATION_REMOVE(st) {
    st.notification = null;
    st.notificationType = null;
    st.notificationTime = null;
  },
  NOTIFICATION_ADD: function NOTIFICATION_REMOVE(st, notification, type) {
    st.notification = notification;
    st.notificationType = type;
    st.notificationTime = Date.now();
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
