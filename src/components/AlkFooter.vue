<template>
  <div class="footer">
    {{{ copyright }}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'Copyright &copy;',
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #405f51;
  color: #ffffff;
  font-size:10px;
  line-height:2em;
  width:100%;
  position: fixed;
  bottom:0;
  margin:0;
  padding:0;
}
</style>
