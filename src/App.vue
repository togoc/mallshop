<template>
  <div id="app">
    {{this.$store.state.name}}
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getTest",1);
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
