<template>
  <div>
    <mt-button type="danger" @click="signOut" size="large">退出登录</mt-button>
    <mt-cell-swipe title="标题文字"></mt-cell-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signOut() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>