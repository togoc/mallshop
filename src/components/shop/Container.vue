<template>
  <div class="shop">
    <p>商家推荐</p>
    <div class="shop_container">
      <div class="shop_recommend">
        <Sold :shop_recommend_list="shop_recommend_list" />
      </div>
    </div>
    <div class="shop_list">
      <p>热销</p>
      <SoldList class="shop_list_inner" />
    </div>
  </div>
</template>


<script>
import Sold from "../Sold";
import SoldList from "../Sold_List";
export default {
  components: {
    Sold,
    SoldList
  },
  data() {
    return {
      shop_recommend_list: [
        {
          link: "/",
          img_url: "",
          detail:
            "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
          sold: "月售111 好评率:99%",
          price: "19.99",
          brande: "蓝月亮",
          coupon: 10
        },
        {
          link: "/",
          img_url: "",
          detail:
            "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
          sold: "月售111 好评率:99%",
          price: "19.99",
          brande: "蓝月亮",
          coupon: 10
        },
        {
          link: "/",
          img_url: "",
          detail:
            "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
          sold: "月售111 好评率:99%",
          price: "19.99",
          brande: "蓝月亮",
          coupon: 10
        },
        {
          link: "/",
          img_url: "",
          detail:
            "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
          sold: "月售111 好评率:99%",
          price: "19.99",
          brande: "蓝月亮",
          coupon: 10
        },
        {
          link: "/",
          img_url: "",
          detail:
            "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
          sold: "月售111 好评率:99%",
          price: "19.99",
          brande: "蓝月亮",
          coupon: 10
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
.shop > p {
  height: 25px;
  line-height: 25px;
  font-weight: bold;
  margin-left: 7px;
  font-size: 0.9em;
}
.shop_list > p {
  height: 25px;
  line-height: 25px;
  font-weight: bold;
  margin-left: 7px;
  font-size: 0.9em;
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
.shop_container {
  overflow: auto;
  background-color: #ffffff;
}
.shop_container::-webkit-scrollbar {
  display: none;
}
.shop_recommend > div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
</style>