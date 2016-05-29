import {
  getCommands
} from '../../vuex/getters.js';
import * as actions from '../../vuex/actions.js';

export default {
  data() {
      return {
        tmpCommand: 'lrange',
      };
    },
    vuex: {
      actions: {
        addCommand: actions.commandAdd,
        removeCommand: actions.commandRemove,
        addNotification: actions.addNotification,
      },
      getters: {
        commands: getCommands,
      },
    },
    methods: {
      clickRemoveCommand: function clickCommand(e) {
        var commandToRemove = e.target.parentElement.dataset.command;
        this.removeCommand(commandToRemove);
      },
      clickCommand: function clickCommand() {
        if (this.tmpCommand) {
          this.addCommand(this.tmpCommand);
          this.tmpCommand = '';
        } else {
          this.addNotification('Cannot add - its empty!', 'error');
        }
      },
    },
};
