<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import "../public/static/reset.css";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  computed: {
    isBusiness() {
      let { identity } = this.$store.state.user;
      if (identity === "business" || identity === undefined) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {}
};
</script>


<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 55px;
}
</style>
