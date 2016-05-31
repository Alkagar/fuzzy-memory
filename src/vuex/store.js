import Vue from 'vue';
import Vuex from 'vuex';
import * as _ from 'lodash';

import commands from './modules/commands.js';
import notification from './modules/notification.js';

import * as actions from './actions.js';
import logger from './../utils/logger.js';

import {
  LOAD_FROM_LOCAL_STORAGE,
} from './mutations-types.js';

Vue.use(Vuex);

const localStorageKey = 'vuex';
const localStorageMiddleware = {
  onInit(state, store) {
    let localState = localStorage.getItem(localStorageKey);
    if (!_.isNull(localState)) {
      try {
        localState = JSON.parse(localState);
        actions.loadFromLocalStorage(store, localState);
      } catch (ex) {
        logger.error('Store:: Command:: Error while parsing local storage.', ex, ex.stack);
      }
    }
  },
  onMutation(mutation, state, store) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  },
};

const store = new Vuex.Store({
  modules: {
    commands,
    notification,
  },
  mutations: {
    [LOAD_FROM_LOCAL_STORAGE](state, newState) {
      state.commands = newState.commands;
    },
  },
  middlewares: [localStorageMiddleware],
});

store.dupa = 'MyDupaValue';

export default store;
