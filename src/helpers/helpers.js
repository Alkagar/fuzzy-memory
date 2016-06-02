import _ from 'lodash';

// TODO: pass here commands list or entire state?
export const commandInStore = (commands, command) => {
  const inArray = _.find(commands, el => el.id === command.id || el.command === command.command);
  return !_.isUndefined(inArray);
};
