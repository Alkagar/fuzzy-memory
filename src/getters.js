export function getCommands(state) {
  return state.commands;
}

export function getNotification(state) {
  return state ? state.notification : null;
}

export function getNotificationType(state) {
  return state ? state.notificationType : 'message';
}

export function getNotificationTime(state) {
  return state ? state.notificationTime : null;
}
