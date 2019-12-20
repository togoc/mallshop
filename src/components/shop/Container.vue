<template>
  <div class="shop_container">
    <div class="shop_recommend">
      <Sold :shop_recommend_list="shop_recommend_list" />
    </div>
    <div class="shop_list"></div>
  </div>
</template>


<script>
import Sold from "../Sold";
export default {
  components: {
    Sold
  },
  data() {
    return {
      shop_recommend_list: [
        {
          link: "/",
          img_url: "",
          detail_str: "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
          detail_sold: "月售111 好评率:99%",
          detail_price: "19.99",
          brande:'蓝月亮',

        },
        {
          link: "/",
          img_url: "",
          detail_str: "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼",
          detail_sold: "月售111 好评率:99%",
          detail_price: "19.99",
          coupon:10
        },
        {
          link: "/",
          img_url: "",
          detail_str: "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼",
          detail_sold: "月售111 好评率:99%",
          detail_price: "19.99"
        },
        {
          link: "/",
          img_url: "",
          detail_str: "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼",
          detail_sold: "月售111 好评率:99%",
          detail_price: "19.99"
        }
      ]
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
.shop_container {
  overflow: auto;
  background-color: #ffffff;
  margin: 7px 0;
}
.shop_container::-webkit-scrollbar {
  display: none;
}
.shop_recommend > div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  /* overflow: auto; */
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
  border: #e0dcdc 2px solid;
}
.shop_recommend_item_detail {
  width: 157px;
  display: flex;
  font-size: 0.9em;
  /* height: 100%; */
  flex-direction: column;
}
.shop_recommend_item_detail span {
  margin: 2px 0;
}
.shop_recommend_item_detail_str {
  font-weight: bold;
  display: block;
  font-size: 0.9em;
  overflow: hidden;
  padding: 3px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  font-size: 1.2em;
  color: red;
}
</style>