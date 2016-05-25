<template>
  <div class="menu">
    <ol>
      <template v-for="link in links">
        <li><a v-link="link">{{ link }}</a></li>
      </template>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        home: 'home',
        about: 'about',
        projects: 'projects',
        running: 'running',
        photo: 'photo',
        redis: 'redis',
      },
    };
  },
};
</script>

<style scoped>
.menu {
  width:100%;
  position: absolute;
  bottom:0;
  margin:0;
  padding:0;
  background-color:rgba(50, 50, 50, 0.5);
}
.menu ol {
  margin: 1em 0;
  padding:0;
}
.menu ol li {
  display: inline;
}
.menu ol li:not(:last-child):after {
  content: "|";
  margin: 0 0.5em;
  color: #42b983;
}
</style>
