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
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item, index) in container_swipe" :key="index">
          <router-link :to="item.link_url" class="home_container_swipe_link">
            <img class="home_container_swipe_img" src="./images/swipe.png" alt />
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div
      class="home_container_favorite"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div
        class="home_container_favorite_item"
        v-for="(item, index) in container_favorite"
        :key="index"
      >
        <router-link to="/" class="home_container_favorite_item_link">
          <div class="home_container_favorite_item_img">
            <img src="./images/favorite.png" :alt="item.brande" />
          </div>
          <div class="home_container_favorite_item_tips">
            <div class="home_container_favorite_item_brande">
              <span>{{item.brande}}</span>
            </div>
            <div class="home_container_favorite_item_detail">
              <span>{{item.detail}}</span>
            </div>
            <div class="home_container_favorite_item_price">
              <span>￥{{item.price}}</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="container_loading">
        <mt-spinner type="triple-bounce"></mt-spinner>
      </div>
    </div>
  </div>
</template>

    //       img_url: "./images/swipe.png",
    //       link_url: "/",
    //       price: 11.8,
    //       brande:'蓝月亮'
    //       detail:'蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装'
<script>
export default {
  data() {
    return {
      container_nav_list: [
        {
          img_url: "./images/sn.png",
          link_url: "/shop",
          list_name: "苏宁易购"
        },
        {
          img_url: "./images/sn.png",
          list_name: "苏宁易购",
          link_url: "/shop"
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
        },
        {
          img_url: "./images/sn.png",
          link_url: "/shop",
          list_name: "苏宁易购"
        }
      ],
      container_swipe: [
        {
          img_url: "./images/swipe.png",
          link_url: "/"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/"
        }
      ],
      container_favorite: [
        {
          img_url: "./images/swipe.png",
          link_url: "/",
          price: 11.8,
          brande: "蓝月亮",
          detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/",
          price: 11.8,
          brande: "蓝月亮",
          detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/",
          price: 11.8,
          brande: "蓝月亮",
          detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/",
          price: 11.8,
          brande: "蓝月亮",
          detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/",
          price: 11.8,
          brande: "蓝月亮",
          detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        },
        {
          img_url: "./images/swipe.png",
          link_url: "/",
          price: 11.8,
          brande: "蓝月亮",
          detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        }
      ],
      loading: false
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        // let last = this.container_favorite[this.container_favorite.length - 1];
        // for (let i = 1; i <= 4; i++) {
        //   this.container_favorite.push({
        //     img_url: "./images/swipe.png",
        //     link_url: "/",
        //     price: 11.8,
        //     brande: "蓝月亮",
        //     detail: "蓝月亮洗衣液 薰衣草香 深层洁净衣物护理 500g/瓶装"
        //   });
        // }
        alert("加载了");
        this.loading = false;
      }, 2500);
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
  box-shadow: 0px 0px 5px rgb(221, 217, 217);
  flex: 0 1 45%;
  padding: 5px 0px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
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
  width: 95%;
  height: 95%;
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