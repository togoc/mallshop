<template>
  <div id="app">
    <router-view />
    <ShopCar class="shop_car" />
  </div>
</template>

<script>
import ShopCar from "./views/ShopCar";
export default {
  components: {
    ShopCar
  },
  data() {
    return {
    };
  },
  mounted() {}
};
</script>


<style>
#app {
  margin-bottom: 90px;
}
</style>
