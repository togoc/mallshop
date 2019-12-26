<template>
  <div>
    <mt-header title="商品管理">
      <router-link to="/business/add" slot="left">
        <mt-button icon="back">添加</mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>

    <div class="manage_list">
      <div class="manage_list_header">
        <div class="manage_list_header_name">
          <span>名称</span>
        </div>
        <div class="manage_list_header_price">
          <span>价格</span>
        </div>
        <div class="manage_list_header_count">
          <span>库存</span>
        </div>
        <div class="manage_list_header_edit">
          <span>操作</span>
        </div>
      </div>

      <div class="manage_list_form">
        <div v-if="false" class="manage_list_soldout">
          <p>没有商品</p>
        </div>
        <div class="manage_list_form_item" v-for="(item, index) in goodsList" :key="index">
          <div class="manage_list_form_item_name">
            <span>{{item.name}}</span>
          </div>
          <div class="manage_list_form_item_price">
            <span>{{item.price}}</span>
          </div>
          <div class="manage_list_form_item_count">
            <span>{{item.count}}</span>
          </div>
          <div class="manage_list_form_item_edit">
            <mt-button
              :type="item.state==='out'?'primary':'danger'"
              plain
              @click="soldOut(item)"
              size="small"
            >{{item.state==='out'?'上架':'下架'}}</mt-button>
            <mt-button type="primary" @click="edit(item)" size="small">编辑</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { postGoods, getManageList } from "../../http";
export default {
  data() {
    return {
      goodsList: []
    };
  },

  mounted() {
    this.getList();
  },
  methods: {
    edit(item) {
      this.$router.push({
        path: "/business/add",
        query: {
          item
        }
      });
    },
    soldOut(item) {
      item.state === "out" ? (item.state = "on") : (item.state = "out");
      console.log({ ...item });
      postGoods({ ...item }).then(res => {
        console.log(res);
      });
    },
    add() {
      this.$router.push({
        path: "/business/add"
      });
    },
    getList() {
      getManageList()
        .then(res => {
          this.goodsList = res.data;
          this.$store.state.businessList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.manage_list_header,
.manage_list_form_item {
  display: flex;
  flex-direction: row;
}
.manage_list_form_item {
  font-size: 0.9em;
}

.manage_list_header_edit,
.manage_list_header_name,
.manage_list_header_price,
.manage_list_header_count {
  height: 20px;
  padding: 7px 0;
  width: 100%;
  font-size: 0.9em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #e5e5e4;
}

.manage_list_form_item_name,
.manage_list_form_item_price,
.manage_list_form_item_count,
.manage_list_form_item_edit {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
}
.manage_list_form_item_edit {
  justify-content: space-around;
}
.mint-button--small {
  white-space: nowrap;
  font-size: 0.8em;
  padding: 0 10px;
}
.manage_list_form_item:nth-child(2n) {
  background-color: #f0f0f0;
}
.manage_list_soldout {
  margin-top: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2em;
}
.mint-header {
  height: 55px;
}
</style>