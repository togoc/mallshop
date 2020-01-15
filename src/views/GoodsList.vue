<template>
  <div class="goods_list">
    <Header />
    <Nav :nav="nav">
      <template v-if="nav[0].isActive">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" class="scroll">
          <router-link
            :to="'/goodsdetail?goods_id='+item.goods_id"
            v-for="(item, index) in goodsList"
            :key="index"
          >
            <div class="goods_item_wrap">
              <div class="goods_item_img_container">
                <img
                  :src="item.goods_small_logo||'http://106.13.184.92/mallshop/assets/img/no-pic.jpeg'"
                  :alt="item.goods_name?item.goods_name.slice(0,2):''"
                />
              </div>
              <div class="goods_item_img_container_outer">
                <div class="goods_item_detail_container">
                  <div class="goods_item_detail_name">{{item.goods_name}}</div>
                  <div class="goods_item_detail_price">￥{{(item.goods_price||0).toFixed(2)}}</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </template>

      <template v-if="nav[1].isActive">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" class="scroll">
          <router-link
            :to="'/goodsdetail?goods_id='+item.goods_id"
            v-for="(item, index) in soldList"
            :key="index"
          >
            <div class="goods_item_wrap">
              <div class="goods_item_img_container">
                <img
                  :src="item.goods_small_logo||'http://106.13.184.92/mallshop/assets/img/no-pic.jpeg'"
                  :alt="item.goods_name?item.goods_name.slice(0,2):''"
                />
              </div>
              <div class="goods_item_img_container_outer">
                <div class="goods_item_detail_container">
                  <div class="goods_item_detail_name">{{item.goods_name}}</div>
                  <div class="goods_item_detail_price">￥{{(item.goods_price||0).toFixed(2)}}</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
      <template v-if="nav[2].isActive">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" class="scroll">
          <router-link
            :to="'/goodsdetail?goods_id='+item.goods_id"
            v-for="(item, index) in priceList"
            :key="index"
          >
            <div class="goods_item_wrap">
              <div class="goods_item_img_container">
                <img
                  :src="item.goods_small_logo||'http://106.13.184.92/mallshop/assets/img/no-pic.jpeg'"
                  :alt="item.goods_name?item.goods_name.slice(0,2):''"
                />
              </div>
              <div class="goods_item_img_container_outer">
                <div class="goods_item_detail_container">
                  <div class="goods_item_detail_name">{{item.goods_name}}</div>
                  <div class="goods_item_detail_price">￥{{(item.goods_price||0).toFixed(2)}}</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </Nav>
  </div>
</template>

<script>
import Header from "../components/home/Header";
import Nav from "../components/nav/index";
import { getGoodsList } from "../http";
export default {
  components: {
    Header,
    Nav
  },
  data() {
    return {
      nav: [
        {
          name: "综合",
          isActive: true
        },
        {
          name: "销量",
          isActive: false
        },
        {
          name: "价格",
          isActive: false
        }
      ],
      goodsList: [],
      loading: false,
      pagenum: 1
    };
  },
  computed: {
    soldList() {
      console.log(1);
      let newList = JSON.parse(JSON.stringify(this.goodsList));
      newList.sort((a, b) => b.goods_id - a.goods_id);
      return newList;
    },
    priceList() {
      console.log(1);
      let newList = JSON.parse(JSON.stringify(this.goodsList));
      newList.sort((a, b) => a.goods_price - b.goods_price);
      return newList;
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {},
    //默认开始执行一次
    loadMore() {
      if (this.loading) return;
      this.loading = true;

      let { cid } = this.$route.query;
      let query = this.createQuery({
        cid,
        query: "togoc",
        pagenum: this.pagenum,
        pagesize: 8
      });
      getGoodsList(query).then(res => {
        console.log(res.data.message);
        this.pagenum += 1;

        this.goodsList = [
          ...this.goodsList,
          ...(Array.isArray(res.data.message) ? res.data.message : [])
        ];

        !Array.isArray(res.data.message)
          ? (this.loading = true)
          : (this.loading = false);
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
.goods_list {
  margin-top: 55px;
}
.scroll {
  a {
    text-decoration-line: none;
    div.goods_item_wrap {
      justify-content: center;
      align-items: center;
      max-height: 125px;
      min-height: 90px;
      min-width: 235px;
      height: 100%;
      width: 100%;
      margin: 7px 0;
      display: flex;
      flex-direction: row;
      div.goods_item_img_container {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          max-height: 125px;
          min-height: 90px;
          max-width: 125px;
          min-width: 90px;
        }
      }
      div.goods_item_img_container_outer {
        width: 60%;
        overflow: hidden;

        height: 100%;
        display: flex;
        flex-direction: column;
        div.goods_item_detail_container {
          width: 100%;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          div.goods_item_detail_name {
            margin: 5px 0;
            height: 100%;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            letter-spacing: 1px;
          }

          div.goods_item_detail_price {
            height: 100%;
            margin: 5px 0;
            font-size: 16px;
            font-weight: bold;
            color: red;
            letter-spacing: 1px;
            background-color: #fff;
          }
        }
      }
    }
  }
}
</style>