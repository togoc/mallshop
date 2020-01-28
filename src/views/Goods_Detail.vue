<template>
  <div class="detail">
    <mt-header title="商品详情" fixed>
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
    <div class="goods_detail_wrap">
      <div class="goods_detail_price">￥{{goodsDetail.goods_price}}</div>
      <div class="godos_detail_context">
        <div class="detail">{{goodsDetail.goods_name}}</div>
        <div class="goods_detail_collect">
          <i class="iconfont icon-collection-b"></i>
          <span>收藏</span>
        </div>
      </div>
    </div>
    <div class="goods_introduce">
      <div class="goods_introduce_title">图文详情</div>
      <div class="goods_introduce_container" v-html="goodsDetail.goods_introduce"></div>
    </div>
    <div class="shopcart">
      <div class="share">
        <i class="iconfont icon-fenxiang"></i>
        分享
      </div>
      <div class="cart">
        <i class="iconfont icon-gouwuche"></i>
        购物车
      </div>
      <div class="add_cart">加入购物车</div>
      <div class="buy">立即购买</div>
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
.detail {
  margin: 55px 0;
}
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

div.goods_detail_wrap {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  div.goods_detail_price {
    margin: 3px 0;
    font-weight: bold;
    letter-spacing: 1px;
    color: red;
  }

  div.godos_detail_context {
    display: flex;
    flex-direction: row;
    div.detail {
      width: 80%;
      display: -webkit-box;
      height: 100%;
      margin: 5px 0;
      line-height: 20px;

      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    div.goods_detail_collect {
      display: flex;
      width: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i.iconfont {
        color: #ccc;
      }
      span {
        margin: 3px;
        font-size: 12px;
      }
    }
  }
}

div.goods_introduce {
  display: flex;
  flex-direction: column;
  div.goods_introduce_title {
    border-top: 5px solid #ccc;
    border-bottom: 5px solid #ccc;
    letter-spacing: 1px;
    font-weight: bold;
    color: red;
    padding: 5px;
  }
}
div.shopcart {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 55px;
  flex-direction: row;
  background-color: #fff;
  div.share,
  div.cart {
    flex: 1 1 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 18px;
  }

  div.add_cart,
  div.buy {
    display: flex;
    flex-direction: column;
    flex: 1 1 30%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: #ffa300;
    color: white;
  }

  div.buy {
    background-color: #fa554f;
  }
}
</style>