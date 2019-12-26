<template>
  <div>
    <div class="shop_recommend_item">
      <router-link to="/business">
        <div class="shop_recommend_item_img">
          <img v-lazy="item.mini_pic[0]" alt />
        </div>
        <div class="shop_recommend_item_detail">
          <span class="item_brande" v-if="item.brande">{{item.brande}}</span>
          <span class="item_brande" v-if="item.name">{{item.name}}</span>
          <span class="item_coupon" v-if="item.coupon">{{item.coupon}}元券</span>
          <div class="shop_recommend_item_detail_inner">
            <span class="shop_recommend_item_detail_str">{{item.detail}}</span>
          </div>
          <span class="shop_recommend_item_detail_sold">
            月销量:
            <i>{{item.sold}}</i>
          </span>
        </div>
      </router-link>
      <div class="shop_recommend_item_detail_price">
        <span>￥{{(item.price).toFixed(2)}}</span>
        <mt-button class="add_pic_btn" type="primary">+</mt-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
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
.add_pic_btn {
  border-radius: 50%;
  font-size: 18px;
  height: 30px;
  width: 30px;
  margin: 0;
  padding: 0;
}
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
.shop_recommend_item_img {
  background-color: #808080;
  height: 150px;
}
.shop_recommend_item_img img {
  width: 150px;
  height: 150px;
}
.shop_recommend_item {
  background-color: #ffffff;
  width: 150px;
  float: left;
  flex-shrink: 0;
  height: 250px;
  overflow: hidden;
  padding: 5px;
  margin: 5px;
  border: #e0dcdc 2px solid;
}
.shop_recommend_item_detail {
  width: 150px;
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
  width: 150px;
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
  justify-content: space-around;
}

@media screen and (max-width: 350px) {
  .shop_recommend_item {
    width: 100px;
    height: 190px;
  }
  .shop_recommend_item_img img {
    width: 100px;
    height: 100px;
  }
  .shop_recommend_item_img {
    height: 100px;
  }
  .shop_recommend_item_detail_price {
    margin: 0;
    font-size: 1em;
  }
  .shop_recommend_item_detail_inner{
    width: 110px;
  }
  .add_pic_btn {
    width: 25px;
    height: 25px;
  }
}
</style>