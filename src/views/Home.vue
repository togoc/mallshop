<template>
  <div :class="['home',{'store':isStore}]">
    <Header :name="name"></Header>
    <router-view></router-view>
    <ShopCar class="shop_car" />
  </div>
</template>


<script>
import Header from "../components/home/Header";
import ShopCar from "../components/home/ShopCar";
import Bus from "../bus";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    ShopCar
  },
  mounted() {
    this.setUser();
  },
  created() {
    Bus.$on("addShopCar", goods => {
      this.add(goods);
    });
  },
  methods: {
    setUser() {
      let isLogin = localStorage.getItem("mallshoptoken") ? true : false;
      if (isLogin) {
        this.$store.state.user = this.$jwt(
          localStorage.getItem("mallshoptoken")
        );
      }
    },
    add(select) {
      let buyuid = this.$store.state.user.id;
      let goods = { ...select, buyuid };
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
      //保存购物车(暂时放在localStorage)
      localStorage.setItem(
        "shopCarList",
        JSON.stringify(this.$store.state.shopCar)
      );
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      identity: state => state.user.identity
    }),
    isStore() {
      return this.$route.path.indexOf("/home/store/") !== -1;
    }
  }
};
</script>



<style scoped>
.home {
  margin-top: 90px;
  transition: all 0.3s linear;
  overflow: hidden;
  margin-bottom: 55px;
}
.store {
  margin-top: 55px;
}
</style>

