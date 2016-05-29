import * as actions from '../../vuex/actions.js';
import * as getters from '../../vuex/getters.js';
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
      timeoutId: null,
    };
  },
  computed: {
    classObject: function() {
      return {
        visible: !_.isNull(this.msg),
        error: this.type === 'error',
        success: this.type === 'success',
        message: this.type === 'message',
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
      type: getters.getNotificationType,
      msg: getters.getNotificationMsg,
      time: getters.getNotificationTime,
    },
  },
  watch: {
    time: function(time) {
      clearTimeout(this.timeoutId);
      if (!_.isNull(time)) {
        this.currentTimeout = this.timeout;
        this.timeoutId = setTimeout(this.decreaseTimeout, this.timeoutCountDown);
      }
    },
  },
  methods: {
    clickRemove: function clickRemove() {
      clearTimeout(this.timeoutId);
      this.removeNotification();
    },
    decreaseTimeout: function() {
      this.currentTimeout = this.currentTimeout - this.timeoutCountDown;
      if (this.currentTimeout > 0) {
        this.timeoutId = setTimeout(this.decreaseTimeout, this.timeoutCountDown);
      } else {
        this.removeNotification();
      }
    },
  },
  ready: function ready() {
    if (this.currentTimeout === 0) {
      this.removeNotification();
    }
  },
};
