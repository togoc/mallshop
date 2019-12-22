<template>
  <div class="form_item">
    <div class="form_item_time">
      <p>订单编号:1232131231231</p>
      <span>下单时间:2016-05-05 15:23:31</span>
    </div>
    <div class="form_item_detail">
      <div class="form_item_img">
        <img src="../home/images/favorite.png" alt="图片" />
      </div>
      <div class="form_item_name">
        <div class="form_item_name_detail">
          <p>蓝月亮蓝月亮蓝月亮蓝月亮蓝月亮fadd蓝月亮</p>
        </div>
        <span>备注111111111111111111111111111111ddddddd1111111</span>
      </div>
      <div class="form_item_price_count">
        <p>￥1990.00</p>
        <span>1</span>
      </div>
    </div>
    <div class="form_item_edit">
      <div class="form_item_last_price">
        <p>
          订单总额:
          <span>￥1990.00</span>
        </p>
      </div>
      <div class="form_item_edit_item">
        <mt-button size="small" type="danger">取消订单</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
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
  border: 2px solid #eaeaea;
  height: 205px;
  background-color: rgb(231, 231, 231);
  box-sizing: border-box;
  margin-top: 10px;
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