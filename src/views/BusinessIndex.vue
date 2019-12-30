<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onload: true
    };
  },
  mounted() {
    this.onload = false;
  },
  created() {}
};
</script>

<style scoped>
</style>