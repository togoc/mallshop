<template>
  <div :class="['form',{'transform':onload}]">
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
        <State0 :state="state0" :getBuyList="getBuyList" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <State1 :state="state1" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <State2 :state="state2" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <State3 :state="state3" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import FormItem from "../components/form/FormItem";
export default {
  components: {
    State0: () => import("../components/form/State0"),
    State1: () => import("../components/form/State1"),
    State2: () => import("../components/form/State2"),
    State3: () => import("../components/form/State3")
  },
  data() {
    return {
      selected: "1",
      onload: true,
      formList: []
    };
  },
  computed: {
    state0() {
      return (
        this.formList.filter(item => {
          if (item.state === 0) return item;
        }) || []
      );
    },
    state1() {
      return (
        this.formList.filter(item => {
          if (item.state === 1) return item;
        }) || []
      );
    },
    state2() {
      return (
        this.formList.filter(item => {
          if (item.state === 2) return item;
        }) || []
      );
    },
    state3() {
      return (
        this.formList.filter(item => {
          if (item.state === 3) return item;
        }) || []
      );
    }
  },
  created() {
    this.getBuyList();
  },
  mounted() {
    this.onload = false;
  },
  methods: {
    getBuyList() {
      this.$http.getBuyList().then(res => {
        this.formList = res.data || [];
      });
    }
  }
};
</script>


<style scoped>
.form {
  margin: 0;
  padding: 0;
  margin-bottom: 55px;
  transition: all 0.3s linear;
}
.transform {
  transform: scale(0.95);
  background-color: red;
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
.mint-tab-container {
  overflow: unset;
}
</style>