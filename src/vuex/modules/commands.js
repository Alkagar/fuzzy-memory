import {
  COMMAND_REMOVE,
  COMMAND_ADD,
} from '../mutations-types.js';
import _ from 'lodash';
import * as actions from '../actions.js';
import logger from '../../utils/logger.js';

const state = {
  all: [],
};

const mutations = {
  [COMMAND_ADD](state, command) {
    if (state.all.indexOf(command) < 0) {
      state.all.push(command);
    }
  },
  [COMMAND_REMOVE](state, command) {
    state.all = _.without(state.all, command);
  },
};

export default {
  state,
  mutations,
};
