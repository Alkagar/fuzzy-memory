import { getCommands } from '../../getters.js';
import * as actions from '../../actions.js';

export default {
  data() {
      return {
        tmpCommand: 'lrange',
      };
    },
    vuex: {
      actions: {
        addCommand: actions.ADD_COMMAND,
        addNotification: actions.addNotification,
      },
      getters: {
        commands: getCommands,
      },
    },
    methods: {
      clickCommand: function clickCommand() {
        if (this.tmpCommand) {
          this.addCommand(this.tmpCommand);
          this.tmpCommand = '';
          this.addNotification('Command Added', 'success');
        } else {
          console.log('cannot add - its empty');
          this.addNotification('Cannot add - its empty!', 'error');
        }
      },
    },
};
