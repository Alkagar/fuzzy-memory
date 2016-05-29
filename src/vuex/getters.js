export function getCommands(state) {
  return state.commands.all;
}

export function getNotificationTime(state) {
  return state.notification.time;
}
export function getNotificationMsg(state) {
  return state.notification.msg;
}
export function getNotificationType(state) {
  return state.notification.type;
}
