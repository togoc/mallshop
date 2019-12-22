<template>
  <div>
    <mt-header title="商品管理">
      <router-link to="/business/add" slot="left">
        <mt-button icon="back">添加</mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
  </div>
</template>



<script>
export default {
  methods: {
    add() {
      console.log(1);
      this.$router.push({
        path: "/business/add"
      });
    }
  }
};
</script>

<style scoped>
.mint-header {
  height: 55px;
}
</style>