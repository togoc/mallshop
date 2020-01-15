<template>
  <div class="home_container">
    <div class="home_container_nav">
      <router-link
        :to="item.link_url"
        class="home_container_nav_item"
        v-for="(item, index) in container_nav_list"
        :key="index"
      >
        <img class="home_container_nav_item_img" src="./images/sn.png" alt />
        <span class="home_container_nav_item_span">{{item.list_name}}</span>
      </router-link>
    </div>
    <div class="home_container_swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item, index) in container_swipe" :key="index">
          <router-link :to="item.navigator_url" class="home_container_swipe_link">
            <img class="home_container_swipe_img" :src="item.image_src" alt />
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- floor -->
    <div class="index_cate">
      <router-link v-for="(item, index) in cateList" :key="index" :to="item.navigator_url||''">
        <img :src="item.image_src" />
      </router-link>
    </div>

    <div class="index_floor">
      <div class="floor_group" v-for="(item1, index) in floorsList" :key="index">
        <div class="floor_group_title">
          <img :src="item1.floor_title[0].image_src" />
        </div>
        <div class="floor_group_list">
          <router-link to v-for="(item2, index) in item1.product_list" :key="index">
            <img :src="item2.image_src" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoldItem from "../store/SoldItem";
import {
  getManageList,
  getSwiperList,
  getCateList,
  getFloorsList
} from "../../http";
import { mapState } from "vuex";
export default {
  components: {
    SoldItem
  },
  data() {
    return {
      container_nav_list: [
        {
          img_url: "./images/sn.png",
          link_url: "/home/store/苏宁易购",
          list_name: "苏宁易购"
        },
        {
          img_url: "./images/sn.png",
          list_name: "苏宁易购",
          link_url: "/shop"
        },
        {
          img_url: "./images/sn.png",
          link_url: "/form",
          list_name: "我的订单"
        },
        {
          img_url: "./images/sn.png",
          link_url: "/shop",
          list_name: "苏宁易购"
        },
        {
          img_url: "./images/sn.png",
          link_url: "/shop",
          list_name: "苏宁易购"
        }
      ],
      cateList: [],
      floorsList: [],
      container_swipe: [],
      loading: false,
      end: false,
      index: 0
    };
  },
  computed: {
    ...mapState({
      container_favorite: state =>
        state.normalList.map(item => {
          //防止没有图片时报错
          if (item.mini_pic.length === 0) {
            item.mini_pic[0] =
              "http://106.13.184.92/mallshop/assets/img/no-pic.jpeg";
          }
          return item;
        })
    })
  },
  created() {
    getSwiperList().then(res => {
      this.container_swipe = res.data.message || [];
    });
    getCateList().then(res => {
      this.cateList = res.data.message || [];
    });
    getFloorsList().then(res => {
      this.floorsList = res.data.message || [];
    });
  },
  methods: {
    loadMore() {
      if (this.loading || this.container_favorite.length !== 0) {
        this.loading = true;
        this.end = true;
        return;
      }
      this.loading = true;
      // getManageList("normal", this.index).then(res => {
      //   this.index += 1;
      //   if (!res.data.length) {
      //     this.end = true;
      //     return;
      //   }
      //   this.$store.state.normalList = this.$store.state.normalList.concat(
      //     res.data
      //   );
      //   this.loading = false;
      // });
    }
  }
};
</script>

<style scoped>
.container_loading {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
}
.home_container_favorite_item_link {
  text-decoration: none;
}
.home_container_favorite {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 5px;
  background-color: #fff9f2;
}
.home_container_favorite_item_brande {
  display: block;
}
.home_container_favorite_item_brande span {
  color: white;
  background-color: #cda3b1;
  padding: 2px;
  font-size: 0.5em;
}
.home_container_favorite_item_price {
  margin: 5px 0;
}
.home_container_favorite_item_price span {
  font-weight: bold;
  color: red;
}
.home_container_favorite_item_detail {
  font-size: 0.9em;
  margin: 2px 0px;
  width: 100px;
  line-height: 25px;
  height: 50px;
}
.home_container_favorite_item_detail span {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.home_container_favorite_item {
  /* border: 1px solid rgb(221, 217, 217); */
  /* box-shadow: 0px 0px 5px rgb(221, 217, 217);
  flex: 0 1 45%;
  padding: 5px 0px;
  margin: 5px 0; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.home_container_favorite_item_img img {
  width: 138px;
  height: 138px;
}
.home_container_swipe {
  width: 100%;
  height: 145px;
  z-index: 990;
}
.home_container_swipe_link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.home_container_swipe_img {
  width: 100%;
  height: 100%;
}

.home_container_nav {
  display: flex;
  justify-content: space-around;
  padding: 0 7px;
  flex-wrap: wrap;
  height: 90px;
}
.home_container_nav_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home_container_nav_item_img {
  width: 48px;
  height: 48px;
}
.home_container_nav_item_span {
  font-size: 0.8em;
}
.home_container_swipe {
  height: 145px;
}
</style>

<style lang="less">
div.home_container_swipe {
  mt-swipe {
    mt-swipe-item {
      width: 100%;
      router-link.home_container_swipe_link {
        img.home_container_swipe_img {
          width: 100%;
        }
      }
    }
  }
}

div.index_cate {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  a {
    height: 100%;
    width: 100%;
    flex: 1;
    text-align: center;
    img {
      width: 70%;
      height: 70%;
      text-align: center;
    }
  }
}
div.index_floor {
  div.floor_group {
    div.floor_group_title {
      width: 100vw;
      margin: 5px 0;
      img {
        width: 100%;
      }
    }

    div.floor_group_list {
      box-sizing: border-box;
      a {
        width: 33.33%;
        box-sizing: border-box;
        display: block;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
        &:nth-last-child(-n + 4) {
          height: 386 * 33.33vw / 232 / 2;
          width: 33.33%;
          border: 5px solid #fff;
        }
      }
    }
  }
}
</style>