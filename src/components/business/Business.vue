<template>
  <div class="business">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="tab1">
        <i class="iconfont icon-yulan"></i>
        <span>预览</span>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <i class="iconfont icon-6"></i>
        <span>订单</span>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <i class="iconfont icon-shangpinguanli"></i>
        <span>商品管理</span>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
      </mt-tab-item>
    </mt-tabbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1">
        <Store />
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <GoodsList />
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <GoodsManage />
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <Setting />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import "../../assets/businessfont/iconfont.css";
export default {
  data() {
    return {
      selected: "tab1"
    };
  },
  computed: {},
  watch: {},
  created() {
    this.checkPath();
  },
  methods: {
    checkPath() {
      try {
        if (this.$route.query.from) {
          this.selected = this.$route.query.from;
          this.$router.push({
            path: "/business"
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  // lazy-loaded
  components: {
    Store: () => import("../store/Store"),
    Setting: () => import("../user/Setting"),
    GoodsManage: () => import("./GoodsManage"),
    GoodsList: () => import("./GoodsList")
  }
};
</script>

<style scoped>
.business {
  font-family: Arial, "Microsoft YaHei", "黑体", sans-serif;
  margin-bottom: 55px;
}
</style>