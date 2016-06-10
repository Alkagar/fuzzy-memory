import VueMdl from 'vue-mdl';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home';
import Redis from './components/Redis';
import GPInterview from './components/GPInterview';

import dataManager from './vuex/data-manager.js';
dataManager();

Vue.use(VueMdl);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/': {
    component: Home,
  },
  '/home': {
    component: Home,
    pageTitle: 'Home',
    dupa: 'dd',
    subRoutes: {
      '/redis': {
        component: Redis,
        pageTitle: 'Redis',
      },
    },
  },
  '/gp-interview': {
    component: GPInterview,
  },
});

router.start(App, '#app');
