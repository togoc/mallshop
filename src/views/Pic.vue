<template>
  <div class="pic" v-if="arr.length!=0">
    <div class="block" @click.prevent="back"></div>
    <div class="pic_outer">
      <mt-swipe :auto="30000000">
        <mt-swipe-item class="pic_item" v-for="(item, index) in arr" :key="index">
          <img :src="item.pics_big" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="block" @click.prevent="back"></div>
    <div class="pic_bg"></div>
  </div>
</template>


<script>
import Bus from "../bus";
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    let { arr } = this.$route.query;
    this.arr = arr;
    console.log(arr[0]);
    if (arr[0] === "[object Object]") this.back();
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
div.pic {
  left: 0;
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .block {
    height: 100%;
    width: 100vw;
  }
  div.pic_outer {
    width: 100vw;
    height: 100vw;
    .mint-swipe {
      width: 100%;
    }
    .pic_item {
      img {
        width: 100%;
      }
    }
  }

  div.pic_bg {
  }
}
</style>