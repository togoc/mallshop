<template>
  <div :class="['bs',{'transform':onload}]">
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
  created(){
    console.log(1)
  }
};
</script>

<style scoped>
.bs{
  transition: all 3s linear;
}
.transform {
  transform: scale(0.92);
  background-color: red;
}
</style>