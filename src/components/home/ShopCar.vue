<template>
  <div>
    <div class="shop_car">
      <div class="shop_more" @click="showShop">
        <i class="iconfont icon-gouwuchekong">
          <mt-badge color="red">{{this.$store.state.shopCar.length}}</mt-badge>
        </i>
        <!-- <span>购物车</span> -->
      </div>
      <div class="num">
        <p>￥{{allnum.toFixed(2)}}</p>
        <span>
          配送费
          <i>2元</i>
        </span>
      </div>
      <div class="settle">
        <input type="button" @click="pay" value="去结算" />
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      class="car_list_bg"
      popup-transition="popup-fade"
      position="bottom"
    >
      <div class="shop_detail">
        <div class="clear">
          <span>已选商品</span>
          <div class="clear_btn" @click="clearShop">
            <span>
              <i class="iconfont icon-delete"></i>
              清空
            </span>
          </div>
        </div>
        <div class="list">
          <div class="list_item" v-for="(item, index) in this.$store.state.shopCar" :key="index">
            <div class="list_item_name_price">
              <i @click="delitem(item)" class="iconfont icon-delete delitem"></i>
              <span class="list_item_name">{{item.name}}</span>
              <span class="list_item_price">￥{{(item.num*item.price).toFixed(2)}}</span>
            </div>
            <div class="list_item_num">
              <button @click="item.num>0?item.num--:''">-</button>
              {{item.num}}
              <button @click="item.num<item.count?item.num++:''">+</button>
            </div>
          </div>
        </div>
        <div class="tableware"></div>
      </div>
    </mt-popup>
  </div>
</template>



<script>
import "./shopcarfont/iconfont.css";
import { addBuyList } from "../../http";
export default {
  computed: {
    allnum() {
      let num = 0;
      this.$store.state.shopCar.map(item => {
        num += item.price * item.num;
        return item;
      });
      return num;
    }
  },
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    showShop() {
      this.popupVisible = !this.popupVisible;
    },
    clearShop() {
      console.log("clear");
      this.$store.state.shopCar = [];
      localStorage.setItem(
        "shopCarList",
        JSON.stringify(this.$store.state.shopCar)
      );
    },
    delitem(listItem) {
      this.$store.state.shopCar.map((item, index) => {
        if (
          item._id === listItem._id &&
          item.selectStyle === listItem.selectStyle
        ) {
          this.$store.state.shopCar.splice(index, 1);
        }
      });
      localStorage.setItem(
        "shopCarList",
        JSON.stringify(this.$store.state.shopCar)
      );
    },
    pay() {
      this.$store.state.shopCar.map((item, index) => {
        if (item.num === 0) {
          this.$store.state.shopCar.splice(index, 1);
        }
        return item;
      });
      let length = 0;
      addBuyList(this.$store.state.shopCar)
        .then(res => {
          if (res.status === 200) {
            this.$router.push({
              path: "/form"
            });
          }
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    if (this.$store.state.shopCar.length === 0) {
      this.$store.state.shopCar =
        JSON.parse(localStorage.getItem("shopCarList")) || [];
    }
  }
};
</script>

<style scoped>
.list {
  /* display: ; */
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 66vh;
  /* margin-bottom: 55px; */
}
.delitem {
  font-weight: bold;
  color: rgb(161, 0, 0);
}
.mint-badge,
.is-size-normal {
  position: absolute;
  top: 0px;
  padding: 2px 2px !important;
}
.mint-palette-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: white;
}
.list_item_num {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 7px;
}
.list_item_price {
  color: red;
}
.list_item {
  height: 20px;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  margin-left: 15px;
}

.list_item {
  border-top: 2px solid #f8f8f8;
}
.list_item:first-child {
  border-top: none;
}
.list_item_name_price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 3 1 auto;
  margin: 0 10px;
}
.list_item_name_price * {
  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;
  line-height: 20px;
}
.list_item_name {
  width: 165px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9em;
  letter-spacing: 1px;
}
.list_item_num {
  flex: 1 1 auto;
}
.clear {
  background-color: #f8f8f8;
  position: fixed;
  display: flex;
  top: -40px;
  left: 0;
  justify-content: space-between;
  height: 20px;
  padding: 10px 7px;
  font-size: 0.9em;
  width: 100%;
  z-index: 9999;
}
.clear_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 0.8em;
  margin-right: 8%;
}
.clear > span {
  font-weight: bold;
}
.shop_detail {
  width: 100vw;
  margin-bottom: 55px;
  color: black;
  max-height: 66vh;
  overflow: auto;
  position: relative;
}
.shop_car {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 55px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  background-color: #404042;
  z-index: 2111;
}

.shop_car_detail {
  margin-bottom: 90px;
}
.shop_more {
  height: 100%;
  background-color: #404142;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.shop_more > span {
  outline: none;
  border-style: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  /* width: 100%; */
  /* background-color: rgb(185, 14, 14); */
}
.icon-gouwuchekong {
  color: #016ccb;
  width: 100%;
  font-size: 2em;
  height: 100%;
  text-align: center;
}
.num {
  margin: 0 10px;
  flex: 2 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.num > p {
  font-weight: bold;
  color: #f8f8f8;
  font-size: 1.2em;
}
.num > span {
  font-weight: bold;
  font-size: 0.8em;
  margin-top: 2px;
  margin-left: 5px;
}
.num > span > i {
  margin-left: 5px;
  text-decoration: line-through;
  color: #7f7f7f;
}
.settle {
  flex: 0.5 1 auto;
  background-color: #fff;
}
.settle > input {
  outline: none;
  border-style: none;
  height: 100%;
  width: 100%;
  background-color: #59d178;
}
</style>