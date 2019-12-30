<template>
  <div>
    <FormItem v-for="(item, index) in state" :cancel="cancel" :item="item" :key="index" />
    <div class="confirm_pay">
      <div class="confirm_pay_price">
        <span>
          总 计: ￥
          <i>{{(allSum).toFixed(2)}}</i>
        </span>
      </div>
      <div class="confirm_pay_edit">
        <mt-button size="small" type="danger" @click="cancel(state)">取消订单</mt-button>
        <mt-button class="pay" size="small" type="primary">确认付款</mt-button>
      </div>
    </div>
  </div>
</template>



<script>
import FormItem from "./FormItem";
export default {
  props: {
    state: Array,
    getBuyList: Function
  },
  data() {
    return {};
  },
  computed: {
    allSum() {
      let sum = 0;
      this.state.map(item => {
        sum += item.num * item.price;
        return item;
      });
      return sum;
    }
  },
  components: {
    FormItem
  },
  methods: {
    cancel(state) {
      let arr = [];
      if (Array.isArray(state)) {
        state.map(item => {
          arr.push({ _id: item._id });
          return item;
        });
      } else {
        arr.push(state);
      }
      this.$http
        .editBuyList({
          type: "cancel",
          query: arr
        })
        .then(res => {
          this.getBuyList();
        });
    }
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
</style>