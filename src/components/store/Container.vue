<template>
  <div class="shop">
    <p>商家推荐</p>
    <div class="shop_container">
      <div class="shop_recommend">
        <SoldItem v-for="(item, index) in shop_recommend_list" :item="item" :key="index" />
      </div>
    </div>
    <div class="shop_list">
      <p>热销</p>
      <div
        class="home_container_favorite"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <StoreItem
          class="shop_list_item_container"
          v-for="(item, index) in shop_list"
          :item="item"
          :key="index"
        />
        <div class="container_loading">
          <mt-spinner type="triple-bounce"></mt-spinner>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//        detail:'',
//       name: "我们",
//       state: "out",
//       price: "123",
//       cut: "321",
//       type: "我我     1      ",
//       count: "11",
//       maxBuy: "22",
//       postage: "33"
import SoldItem from "./SoldItem";
import StoreItem from "./StoreItem";
import { mapState } from "vuex";
export default {
  components: {
    SoldItem,
    StoreItem
  },
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.getList();
  },
  computed: {
    ...mapState({
      shop_list: state =>
        state.businessList.map(item => {
          //防止没有图片时报错
          if (item.mini_pic.length === 0) {
            let item1 = JSON.parse(JSON.stringify(item));
            item1.mini_pic[0] =
              "http://106.13.184.92/mallshop/assets/img/no-pic.jpeg";
            return item1;
          }
          return item;
        }),
      shop_recommend_list: state =>
        state.businessList.map(item => {
          //防止没有图片时报错
          if (item.mini_pic.length === 0) {
            let item1 = JSON.parse(JSON.stringify(item));
            item1.mini_pic[0] =
              "http://106.13.184.92/mallshop/assets/img/no-pic.jpeg";
            return item1;
          }
          return item;
        })
    })
  },
  methods: {
    main_log(val) {
      console.log("main_log", val);
    },
    sub_log(val) {
      console.log("sub_log", val);
      this.$refs.target_1.collapse();
    },
    getList() {
      // console.log(this.$store.getters.noWarningBusinessList);
      // getManageList().then(res => {
      //   console.log(res.data);
      //   this.shop_list = res.data;
      // });
    },
    loadMore() {
      if (this.loading) return;
      this.loading = true;
      // this.loading = true;
      // setTimeout(() => {
      //   let last = this.container_favorite[this.container_favorite.length - 1];
      //   for (let i = 1; i <= 4; i++) {
      //     this.container_favorite.push({
      //       link: "/",
      //       img_url: "",
      //       detail:
      //         "小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍鱼小鲍111111111111111111111111111111111111111鱼小鲍鱼",
      //       sold: "月售111 好评率:99%",
      //       price: "19.99",
      //       brande: "蓝月亮",
      //       coupon: 10
      //     });
      //   }
      //   this.loading = false;
      // }, 2500);
    }
  }
};
</script>
<style scoped>
.shop_list_item_container {
  width: 100%;
}
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

.home_container_favorite {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 5px;
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
.shop_recommend {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
.shop_recommend > div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
</style>