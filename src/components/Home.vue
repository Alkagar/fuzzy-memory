<template>
  <div class="page page-home">
    <h1>{{ $route.pageTitle }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
