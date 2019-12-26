<template>
  <div>
    <div class="shop_list_item">
      <div class="shop_list_item_img">
        <img v-lazy="item.mini_pic[0]" alt="图片" />
      </div>
      <div class="shop_list_item_detail">
        <div class="shop_list_item_detail_title">
          <span class="shop_list_item_detail_str">{{item.name}}</span>
        </div>
        <div class="shop_list_item_detail_container">
          <span class="shop_list_item_detail_str">{{item.detail}}</span>
        </div>
        <div class="shop_list_item_detail_sold">
          <span>
            月售
            <i>{{item.sold}}</i>
          </span>
        </div>
        <div class="shop_list_item_detail_price">
          <span class="item_detail_price">
            售价:￥
            <i>{{(item.price).toFixed(2)}}</i>
          </span>
          <mt-button class="add_pic_btn" type="primary">+</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  created() {},
  data() {
    return {
      picUrl: ""
    };
  }
};
</script>


<style scoped>
.add_pic_btn {
  border-radius: 50%;
  font-size: 18px;
  height: 30px;
  width: 30px;
  margin: 0;
  padding: 0;
}
.shop_list_item_detail_title,
.shop_list_item_detail_container,
.shop_list_item_detail_sold,
.shop_list_item_detail_price {
  margin: 5px 0;
  height: 100%;
  width: 100%;
  font-size: 0.8em;
  line-height: 20px;
}
.shop_list_item_detail_price {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop_list_item_detail_container,
.shop_list_item_detail_sold {
  margin: 0;
  color: rgb(153, 153, 153);
}
.shop_list_item_detail_str {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1.2em;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.item_detail_price {
  font-size: 1.2em;
  font-weight: bold;
  color: red;
  margin: 0;
}
.shop_list_item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border: 2px solid #ccc;
}
.shop_list_item_img,
.shop_list_item_detail {
  display: flex;
  flex-direction: column;
  height: 115px;
}
.shop_list_item_detail {
  width: 100%;
  margin-left: 5px;
}
.shop_list_item_img {
  background-color: rgb(128, 128, 128);
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.shop_list_item_img img {
  width: 110px;
  height: 110px;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
  color: black;
}
</style>