<template>
  <div>
    <div class="shop_recommend_item" v-for="(item, index) in shop_recommend_list" :key="index">
      <router-link :to="item.link">
        <div class="shop_recommend_item_img">
          <img src="./shop/images/recommend.png" alt />
        </div>
        <div class="shop_recommend_item_detail">
          <span class="item_brande" v-if="item.brande">{{item.brande}}</span>
          <span class="item_coupon" v-if="item.coupon">{{item.coupon}}元券</span>
          <div class="shop_recommend_item_detail_inner">
            <span class="shop_recommend_item_detail_str">{{item.detail}}</span>
          </div>
          <span class="shop_recommend_item_detail_sold">{{item.sold}}</span>
        </div>
      </router-link>
      <div class="shop_recommend_item_detail_price">
        <span>￥{{item.price}}</span>
        <mt-palette-button
          content="+"
          @expand.native="main_log('expand')"
          @expanded.native="main_log('expanded')"
          @collapse.native="main_log('collapse')"
          direction="rt"
          class="pb"
          :radius="80"
          ref="target_1"
          mainButtonStyle="color:#fff;background-color:#26a2ff;"
          style="left:30px;"
        >
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    shop_recommend_list: Array
  },
  data() {
    return {
      //   shop_recommend_list: [
      //     {
      //       link: "/",
      //       img_url: "",
      //       brande: "蓝月亮"
      //       detail: "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼",
      //       detail_sold: "月售111 好评率:99%",
      //       price: "19.99"
      //     }
      //   ]
    };
  },
  methods: {
    main_log(val) {
      console.log("main_log", val);
    },
    sub_log(val) {
      console.log("sub_log", val);
      this.$refs.target_1.collapse();
    }
  }
};
</script>



<style scoped>
.item_coupon {
  position: absolute;
  right: 0;
  letter-spacing: 1px;
  display: block;
  color: white;
  background-color: rgba(255, 0, 0, 0.7);
  top: -25px;
  font-size: 0.8em;
  padding: 3px;
}
.item_brande {
  position: absolute;
  color: white;
  background-color: #cda3b1;
  padding: 2px;
  letter-spacing: 1px;
  font-size: 0.5em;
  top: -13px;
}
.mint-palette-button {
  width: 10px;
  height: 10px;
  padding: 10px;
  line-height: 30px;
  margin: 5px;
  display: flex;
  font-size: 12px;
}
* {
  text-decoration: none;
}
.mint-sub-button-container {
  width: 10px;
  height: 10px;
}

.shop_recommend_item_img img {
  width: 157px;
  height: 157px;
}
.shop_recommend_item {
  background-color: #ffffff;
  width: 157px;
  float: left;
  flex-shrink: 0;
  height: 250px;
  overflow: hidden;
  padding: 5px;
  margin: 5px;
  border: #e0dcdc 2px solid;
}
.shop_recommend_item_detail {
  width: 157px;
  display: flex;
  font-size: 0.9em;
  height: 50px;
  flex-direction: column;
  position: relative;
}
.shop_recommend_item_detail span {
  margin: 2px 0;
}
.shop_recommend_item_detail_str {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.shop_recommend_item_detail_inner {
  font-size: 0.9em;
  width: 157px;
  line-height: 20px;
  height: 40px;
}
.shop_recommend_item_detail_sold {
  font-size: 0.9em;
  padding: 3px 0;
  color: #afafaf;
}
.shop_recommend_item_detail_price {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 5px;
  font-size: 1.2em;
  color: red;
}
</style>