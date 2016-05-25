import * as actions from '../../actions.js';
import * as getters from '../../getters.js';
import * as _ from 'lodash';

export default {
  props: {
    timeout: {
      default: 10000
    },
  },
  data: () => {
    return {
      currentTimeout: 0,
      timeoutCountDown: 100,

    };
  },
  computed: {
    classObject: function() {
      return {
        visible: !_.isNull(this.getNotification),
        error: this.notificationType === 'error',
        success: this.notificationType === 'success',
        message: this.notificationType === 'message',
      };
    },
    timeoutFormated: function() {
      return (this.currentTimeout / 1000).toFixed(2);
    },
  },
  vuex: {
    actions: {
      removeNotification: actions.removeNotification
    },
    getters: {
      getNotification: getters.getNotification,
      notificationType: getters.getNotificationType,
      notificationTime: getters.getNotificationTime,
    },
  },
  watch: {
    notificationTime: function getNotification(newNotificationTime) {
      if (!_.isNull(newNotificationTime)) {
        this.currentTimeout = this.timeout;
        setTimeout(this.decreaseTimeout, this.timeoutCountDown);
      }
    },
  },
  methods: {
    clickRemove: function clickRemove() {
      this.removeNotification();
    },
    decreaseTimeout: function() {
      this.currentTimeout = this.currentTimeout - this.timeoutCountDown;
      if (this.currentTimeout > 0) {
        setTimeout(this.decreaseTimeout, this.timeoutCountDown);
      } else {
        this.removeNotification();
      }
    },
  },
};
