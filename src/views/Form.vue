<template>
  <div class="form">
    <mt-header title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待付款</mt-tab-item>
      <mt-tab-item id="2">已付款</mt-tab-item>
      <mt-tab-item id="3">已完成</mt-tab-item>
      <mt-tab-item id="4">已取消</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <FormItem v-for="(item, index) in list" :key="index" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p>已付款</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <p>已完成</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <p>已取消</p>
      </mt-tab-container-item>
    </mt-tab-container>

    <!-- footer -->
    <div class="confirm_pay">
      <div class="confirm_pay_price">
        <span>
          ￥
          <i>{{(999).toFixed(2)}}</i>
        </span>
      </div>
      <div class="confirm_pay_edit">
        <mt-button size="small" type="danger">取消订单</mt-button>
        <mt-button class="pay" size="small" type="primary">确认付款</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import FormItem from "../components/form/FormItem";
export default {
  components: {
    FormItem
  },
  data() {
    return {
      selected: "1",
      list: [1, 2]
    };
  }
};
</script>


<style scoped>
.confirm_pay_edit {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.confirm_pay_price {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: row;
  width: 100%;
}
.confirm_pay_price i {
  font-size: 1.5em;
}
.confirm_pay {
  flex-direction: row;
  display: flex;
  background-color: rgb(160, 63, 63);
  justify-content: center;
  height: 55px;
  /* background-color: red; */
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.form {
  margin: 0;
  background-color: rgb(199, 199, 199);
  padding: 0;
  margin-bottom: 55px;
}
.mint-navbar {
  margin-bottom: 10px;
}
.mint-tab-item {
  box-sizing: border-box;
  border-bottom: 2px solid #eaeaea;
}
.is-selected {
  margin-bottom: 0px !important;
}
.mint-header {
  height: 55px;
  background-color: red;
}
</style>