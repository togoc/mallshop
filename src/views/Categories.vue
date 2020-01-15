<template>
  <div class="cate">
    <Header />
    <div class="content">
      <div class="left_menu">
        <div
          :class="['left_menu_item',{'active':index==currentIndex}]"
          @click="handleItem(index)"
          v-for="(item, index) in leftList"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="right_content" ref="wrap">
        <div class="right_content_item" v-for="(item1, index) in rightContent" :key="index">
          <div class="right_content_item_title">/{{item1.cat_name}}/</div>
          <div class="right_content_item_wrap">
            <router-link
              v-for="(item2, index) in item1.children"
              :key="index"
              :to="'/goodslist?cid='+item2.cat_id"
            >
              <div class="right_content_item_content">
                <img :src="item2.cat_icon" alt />
                {{item2.cat_name}}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { getCategories } from "../http";
import Header from "../components/home/Header";
export default {
  name: "Categories",
  components: {
    Header
  },
  data() {
    return {
      leftList: [],
      rightContent: [],
      currentIndex: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let { cates, timeOut } = JSON.parse(localStorage.getItem("cates")) || "";
      if (Date.now() - timeOut >= 600000) cates = "";
      if (cates) {
        this.leftList = cates.map(v => v.cat_name) || [];
        this.rightContent = cates[0].children.map(v => v) || [];
      } else {
        getCategories().then(res => {
          cates = res.data.message;
          let timeOut = Date.now();
          localStorage.setItem("cates", JSON.stringify({ cates, timeOut }));
          this.leftList = cates.map(v => v.cat_name) || [];
          this.rightContent = cates[0].children.map(v => v) || [];
        });
      }
    },
    handleItem(index) {
      let { cates, timeOut } = JSON.parse(localStorage.getItem("cates"));
      if (Date.now() - timeOut >= 600000) this.getData();
      this.rightContent = cates[index].children.map(v => v) || [];
      this.currentIndex = index;
      this.$refs.wrap.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="less">
.cate {
  overflow: hidden;
}
.active {
  color: red;
}
.content {
  overflow: hidden;
  height: calc(100vh - 55px);
  box-sizing: border-box;
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  .left_menu {
    overflow-y: auto;
    width: 33%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .left_menu_item {
      text-align: center;
      padding: 5px;
    }
  }
  .right_content {
    flex-grow: 4;
    scroll-behavior: smooth;
  }
}

div.right_content {
  overflow-y: auto;
  width: 66%;
  font-size: 12px;
  div.right_content_item {
    display: flex;
    flex-direction: column;
    div.right_content_item_title {
      text-align: center;
      font-weight: bold;
      margin-top: 5px;
    }

    div.right_content_item_wrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      a {
        width: 30%;
        text-decoration-line: none;
        margin: 5px 0;
        div.right_content_item_content {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 100%;
          img {
            width: 70%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>