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
    state.all.push(command);
  },
  [COMMAND_REMOVE](state, command) {
    state.all = _.filter(state.all, el => el.id !== command.id);
  },
};

export default {
  state,
  mutations,
};
