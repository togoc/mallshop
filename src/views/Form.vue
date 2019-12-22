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
      <mt-tab-item id="3">选项三</mt-tab-item>
      <mt-tab-item id="4">选项三</mt-tab-item>
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
.form {
  margin: 0;
  background-color: rgb(199, 199, 199);
  padding: 0;
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