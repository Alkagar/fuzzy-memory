<template>
  <div id="app">
 ll rethinkdb   <a-header></a-header>
    <notification></notification>
    <router-view></router-view>
    <alk-footer></alk-footer>
  </div>
</template>

<script>
import AlkFooter from './components/AlkFooter';
import AHeader from './components/AHeader';
import Notification from './components/Notification';
import store from './vuex/store.js';

export default {
  components: {
    AlkFooter,
    AHeader,
    Notification,
  },
  store,
};
</script>

<style>
html, body {
  height: 100%;
  margin:0;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app {
  padding-top:250px;
  color: #2c3e50;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
