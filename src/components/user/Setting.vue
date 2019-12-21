<template>
  <div>
    <mt-button type="danger" @click="signOut" size="large">退出登录</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>