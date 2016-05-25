<template>
  <div class="page page-home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Home',
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
.page {
  max-width: 600px;
}
</style>
