import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home';
import Redis from './components/Redis';

Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/': {
    component: Home,
  },
  '/home': {
    component: Home,
  },
  '/redis': {
    component: Redis,
  },
});

router.start(App, '#app');
