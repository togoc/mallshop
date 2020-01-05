<template>
  <div :class="['form_item',{'soldout':item.num>item.count}]">
    <div class="form_item_time">
      <p>订单编号:{{item._id}}</p>
      <span>下单时间:{{this.$moment(item.date).format('YYYY-MM-DD HH:mm:ss')}}</span>
    </div>
    <div class="form_item_detail">
      <div class="form_item_img">
        <img :src="item.mini_pic[0]" alt="图片" />
      </div>
      <div class="form_item_name">
        <div class="form_item_name_detail">
          <p>{{item.name}}</p>
        </div>
        <span>{{item.selectStyle}}</span>
      </div>
      <div class="form_item_price_count">
        <p>
          ￥
          <i>{{typeof item.price ?(item.price).toFixed(2):item.price}}</i>
        </p>
        <span>×{{item.num}}</span>
      </div>
    </div>
    <div class="form_item_edit">
      <div class="form_item_last_price">
        <p>
          订单总额:
          <span>￥{{(item.num*item.price).toFixed(2)}}</span>
        </p>
      </div>
      <div class="form_item_edit_item">
        <mt-button
          size="small"
          type="danger"
          :disabled="item.state!==0&&item.state!==1"
          @click="cancel(item)"
        >取消订单</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    cancel: Function
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.pay {
  margin-left: 5px;
}
.form_item_time {
  display: flex;
  height: 16%;
  padding: 2%;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #eaeaea;
}
.form_item_detail {
  height: 24%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #eaeaea;
  height: 75px;
}
.form_item_edit {
  height: 22%;
  display: flex;
  padding: 2%;
  flex-direction: row;
}

.form_item_edit_item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.form_item_last_price {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
}
.form_item_last_price span {
  color: red;
}
.form_item_name {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* max-width: 200px; */
  height: 100%;
}
.form_item_name_detail > p {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.form_item_name_detail {
  margin: 2px 0px;
  width: 130px;
}
.form_item_name > span {
  margin-top: 5px;
  font-size: 0.9em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 130px;
}
.form_item_price_count {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form_item_price_count {
  color: red;
  font-weight: bold;
}

.form_item_img {
  flex: 1 1 auto;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.form_item_img > img {
  height: 100%;
}

.form_item {
  border: 2px solid #fff;
  height: 205px;
  background-color: rgb(231, 231, 231);
  box-sizing: border-box;
  margin-top: 10px;
  box-shadow: 0 0 5px #888;
  width: 100%;
}
.sold_out {
  opacity: 0.5;
}
.form_item:first-child {
  margin-top: 0px;
}

.form_item_time > span {
  font-size: 0.9em;
  margin-top: 5px;
  color: #8a8a8a;
}
</style>