<template>
  <div>
    <mt-header title="商品详情">
      <div slot="left" @click="back">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <div class="swiper_wrap">
      <mt-swipe :auto="3000">
        <mt-swipe-item
          class="swiper_wrap_item"
          v-for="(item, index) in goodsDetail.pics"
          :key="index"
        >
          <img :src="item.pics_mid" @click="pic(goodsDetail.pics,index)" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>


<script>
import { getGoodsDetail } from "../http";
export default {
  data() {
    return {
      swiperList: [],
      goodsDetail: Object
    };
  },
  created() {
    this.getGoodsDetail();
  },
  methods: {
    getGoodsDetail() {
      let { goods_id } = this.$route.query;
      let query = this.createQuery({
        goods_id
      });
      getGoodsDetail(query).then(res => {
        this.goodsDetail = res.data.message[0] || {};
        console.log(this.goodsDetail);
      });
    },
    back() {
      this.$router.go(-1);
    },
    pic(arr, current) {
      this.$router.push({
        path: "/pic",
        query: { arr }
      });
    },
    createQuery(obj) {
      let query = "";
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const element = obj[key];
          query += String(key) + "=" + String(element) + "&";
        }
      }
      return query;
    }
  }
};
</script>

<style lang="less">
.mint-header {
  height: 55px;
  background-color: #ff2d4a;
}
.swiper_wrap {
  height: 63vw;
  .swiper_wrap_item {
    text-align: center;
    img {
      text-align: center;
      height: 90%;
    }
  }
  .mint-swipe-indicators {
    .mint-swipe-indicator {
      opacity: 0.2;
    }
    .is-active {
      background: red;
      opacity: 1;
    }
  }
}
</style>