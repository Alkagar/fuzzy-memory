<template>
<div class='header'>
  <a-menu></a-menu>
</div>
</template>

<script>
import AMenu from './AMenu';

export default {
  components: {
    AMenu,
  },
};
</script>

<style scoped>
.header {
  background-image: url(../../assets/foggy.jpg);
  background-size: cover;
  background-position: center 70%;
  background-color: #42b983;
  width:100%;
  position: fixed;
  height:250px;
  top:0;
  margin:0;
  padding:0;
}
</style>
