import {
  getCommands,
} from '../../vuex/getters.js';

import * as actions from '../../vuex/actions.js';

export default {
  data: function data() {
    return {
      tmpCommand: 'lrange',
    };
  },
  vuex: {
    actions: {
      saveCommand: actions.commandSave,
      removeCommand: actions.commandRemoveFromDB,
      addNotification: actions.addNotification,
    },
    getters: {
      commands: getCommands,
    },
  },
  methods: {
    clickRemoveCommand: function clickCommand(e) {
      const commandToRemove = e.target.parentElement.dataset.id;
      console.log('ToRemove', commandToRemove);
      this.removeCommand(commandToRemove);
    },
    clickCommand: function clickCommand() {
      if (this.tmpCommand) {
        console.log('ddd', this.tmpCommand);
        this.saveCommand({
          command: this.tmpCommand,
        });
        this.tmpCommand = '';
      } else {
        this.addNotification('Cannot add - its empty!', 'error');
      }
    },
  },
  ready: function ready() {},
};
