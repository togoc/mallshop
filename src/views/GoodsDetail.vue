<template>
  <div :class="['goods_detail',{'small':small}]">
    <div class="goods_detail_pic_nav">
      <mt-swipe :show-indicators="true">
        <mt-swipe-item v-for="(item, index) in detail_pic" :key="index">
          <img :src="item" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="goods_detail_nav">
      <div class="goods_detail_price">
        <span>抢购价</span>
        <div class="goods_detail_price_str">
          <span>￥{{(item.price).toFixed(2)}}</span>
        </div>
      </div>
      <div class="goods_detail_namep">
        <span>{{item.detail}}</span>
      </div>
    </div>
    <div class="goods_picker">
      <div class="goods_picker_type">
        <div class="goods_picker_type_tip">
          <span>选择(必选)</span>
          <div class="goods_picker_type_active">
            <span @click="sheetVisible=true">
              <i>✔</i>
              {{goods.selectStyle}}
            </span>
          </div>
        </div>
        <div class="goods_picker_num">
          <span>数量</span>
          <div class="goods_picker_num_picker">
            <button @click="goods.num>1?goods.num--:''">-</button>
            {{goods.num}}
            <button @click="goods.num<item.count?goods.num++:''">+</button>
          </div>
        </div>
        <div class="goods_picker_post">
          <span>运费</span>
          <div class="goods_picker_post_price">
            <span>{{item.postage===0?'包邮':item.postage}}</span>
          </div>
        </div>
        <div class="addcar">
          <div></div>
          <div class="addcar_btn">
            <mt-button type="danger" @click="add" size="small">加入购物车</mt-button>
          </div>
        </div>
      </div>
      <mt-actionsheet class="goods_picker_nav" :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
    <div class="goods_detail_comment">
      <h3>全部评价</h3>
      <p>12</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      small: false,
      actions: [
        {
          name: "黑色",
          method: () => {
            this.select("黑色");
          }
        },
        {
          name: "黄色",
          method: () => {
            this.select("黄色");
          }
        },
        {
          name: "金色",
          method: () => {
            this.select("金色");
          }
        }
      ],
      goods: {
        selectStyle: "黑色",
        num: 1
      },
      sheetVisible: false
    };
  },
  methods: {
    select(str) {
      this.goods.selectStyle = str;
    },
    add() {
      let goods = { ...this.goods, ...this.item };
      let length = 0;
      if (this.$store.state.shopCar.length === 0) {
        this.$store.state.shopCar.push(goods);
      } else {
        this.$store.state.shopCar.map(item => {
          if (
            item._id === goods._id &&
            item.selectStyle === goods.selectStyle
          ) {
            item.num += goods.num;
          } else {
            length++;
          }
          return item;
        });
        if (length === this.$store.state.shopCar.length) {
          this.$store.state.shopCar.push(goods);
        }
      }
    }
  },
  computed: {
    detail_pic() {
      return this.$route.query.item.detail_pic;
    },
    item() {
      return this.$route.query.item;
    }
  },
  created() {},
  mounted() {
    this.small = true;
  }
};
</script>
<style scoped>
.goods_picker_type {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.goods_picker {
  border-bottom: 7px solid #ccc;
}
.goods_picker_type_tip,
.goods_picker_num,
.goods_picker_post,
.addcar {
  display: flex;
  flex-direction: row;
  margin: 5px 7px;
  height: 100%;
  font-size: 1em;
  width: 100%;
}
.goods_picker_type_tip > span,
.goods_picker_num > span,
.goods_picker_post > span {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.addcar > * {
  width: 100%;
}
.goods_picker_type_active,
.goods_picker_post_price,
.goods_picker_num_picker {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
  margin: 0 10px;
  align-items: center;
  width: 100%;
}
.goods_detail_nav,
.goods_detail_price,
.goods_detail_namep {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.goods_detail_namep {
  height: 100%;
  margin: 3px 0px;
}
.addcar_btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods_detail_namep p {
  margin: 0 7px;
  font-weight: bold;
}
.goods_detail_namep span {
  letter-spacing: 2px;
  line-height: 1.1em;
  font-weight: bold;
  margin: 0 7px;
  font-size: 0.9em;
  text-indent: 5px;
}
.goods_detail_price_str {
  display: flex;
  flex-direction: row;
  margin: 3px 10px;
  align-items: center;
}
.goods_detail_nav {
  border-bottom: 7px solid #ccc;
}
.goods_detail_price > span {
  margin: 3px 10px;
  font-size: 0.8em;
  font-weight: normal;
  color: #ffaa84;
}
.goods_detail_price {
  font-size: 1.2em;
  font-weight: bold;
  color: red;
}
.goods_detail {
  transition: all 0.3s linear;
  margin-top: 0px;
  background-color: rgb(255, 152, 152);
  transform: scale(0.95);
}
.small {
  margin-top: -35px;
  background-color: #fff;
  transform: scale(1);
}
.mint-header {
  height: 55px;
  color: bisque;
}
.goods_detail_pic_nav {
  width: 100%;
  background-color: rgb(143, 143, 143);
  height: 33vh;
}
.mint-swipe-item {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.mint-swipe-item img {
  height: 100%;
}
</style>