<template>
  <div>
    <div class="nav">
      <p
        :class="['title',{'active':item.isActive}]"
        v-for="(item, index) in nav"
        @click="handleAct(index)"
        :key="index"
      >{{item.name}}</p>
    </div>
    <div class="slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array
  },
  methods: {
    handleAct(index) {
      this.nav.forEach((v, i) =>
        i === index ? (v.isActive = true) : (v.isActive = false)
      );
    }
  }
};
</script>



<style lang="less">
.nav {
  display: flex;
  flex-direction: row;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px 0;
  }
  .active {
    color: red;
    border-bottom: 2px solid red;
  }
}
</style>>
