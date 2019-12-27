<template>
  <div class="home">
    <Header :name="name"></Header>
    <router-view></router-view>
    <ShopCar class="shop_car" />
  </div>
</template>


<script>
import Header from "../components/home/Header";
import Container from "../components/home/Container";
import ShopCar from "../components/home/ShopCar";
import jwt from "jwt-decode";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Container,
    ShopCar
  },
  mounted() {
    this.setUser();
  },
  created() {},
  methods: {
    setUser() {
      let isLogin = localStorage.getItem("mallshoptoken") ? true : false;
      if (isLogin) {
        this.$store.state.user = jwt(localStorage.getItem("mallshoptoken"));
      }
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      identity: state => state.user.identity
    })
  }
};
</script>



<style scoped>
.home {
  margin-top: 90px;
}
</style>

