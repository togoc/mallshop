<template>
  <div>
    <div class="shop_car">
      <div class="shop_more">
        <input type="button" @click="showShop" value="查看购物车" />
      </div>
      <div class="count">
        <p>￥11</p>
        <span>配送费</span>
      </div>
      <div class="settle">
        <input type="button" value="去结算" />
      </div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popupVisible" position="bottom">
      <div class="shop_detail">
        <div class="clear">
          <span>已选商品</span>
          <div>
            <span>清空</span>
          </div>
        </div>
        <div class="list">
          <div class="list_item" v-for="(item, index) in list" :key="index">
            <div class="list_item_name_price">
              <span class="list_item_name">{{item.name}}</span>
              <span class="list_item_price">￥{{item.price}}</span>
            </div>
            <div class="list_item_count">
              <mt-palette-button content="-">
                <div class="my-icon-button"></div>
                <div class="my-icon-button"></div>
                <div class="my-icon-button"></div>
              </mt-palette-button>
              <span>{{item.count}}</span>
              <mt-palette-button content="+">
                <div class="my-icon-button"></div>
                <div class="my-icon-button"></div>
                <div class="my-icon-button"></div>
              </mt-palette-button>
            </div>
          </div>
        </div>
        <div class="tableware"></div>
      </div>
    </mt-popup>
  </div>
</template>



<script>
export default {
  data() {
    return {
      popupVisible: true,
      list: [
        {
          name: "新奥尔良",
          price: 121,
          coupon: 5,
          count: 1
        },
        {
          name: "10公斤新奥尔良2号11111111111",
          price: 121,
          coupon: 5,
          count: 1
        }
      ]
    };
  },
  methods: {
    showShop() {
      this.popupVisible = !this.popupVisible;
    }
  }
};
</script>

<style scoped>
.mint-palette-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: white;
}
.list_item_count {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 10px;
}
.list_item_price {
  color: red;
}
.list_item {
  height: 20px;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
}
.list_item_name_price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 3 1 auto;
  margin: 0 10px;
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
.list_item_count {
  flex: 1 1 auto;
}
.clear {
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  margin: 0 7px;
  height: 20px;
  padding: 10px 0;
}

.shop_detail {
  width: 100vw;
  margin-bottom: 90px;
  color: black;
}
.shop_car {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  background-color: #404042;
  z-index: 9999;
}

.shop_car_detail {
  margin-bottom: 90px;
}
.shop_more {
  height: 100%;
  background-color: #fff;
  flex: 0 1 auto;
}
.shop_more > input {
  outline: none;
  border-style: none;
  height: 100%;
  width: 100%;
  background-color: rgb(185, 14, 14);
}
.count {
  margin: 0 10px;
  flex: 2 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.count > p {
  font-weight: bold;
  color: red;
  font-size: 1.2em;
}
.count > span {
  font-weight: bold;
  font-size: 0.8em;
  margin-top: 2px;
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
  background-color: rgb(118, 202, 153);
}
</style>