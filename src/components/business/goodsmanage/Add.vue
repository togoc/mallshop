<template>
  <div class="add">
    <mt-header title="添加商品">
      <router-link to="/business?from=tab3" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mint-button>1</mint-button>
    </mt-header>
    <div class="add_goods">
      <!-- 商品缩略图 -->
      <div class="mini_pic">
        <div class="pic_tips">
          <p>
            商品缩略图
            <i>(必须有, 最多一张, 建议大小700*700)</i>
          </p>
        </div>
        <div class="pic_nav">
          <div>
            <mt-button class="add_pic_btn" @click="changeAddType('mini')" type="primary">+</mt-button>
          </div>
          <div class="img_container">
            <div class="img_item" v-for="(item, index) in mini_pic_list" :key="index">
              <img v-lazy="item" alt />
              <div class="edit">
                <mt-button @click="deletePic('mini',index,item)" type="danger">删除</mt-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品详情图 -->
      <div class="mini_pic">
        <div class="pic_tips">
          <p>
            商品详情图
            <i>(最多3张, 建议大小700*700)</i>
          </p>
        </div>
        <div class="pic_nav">
          <div>
            <mt-button class="add_pic_btn" @click="changeAddType('detail')" type="primary">+</mt-button>
          </div>
          <div class="img_container">
            <div class="img_item" v-for="(item, index) in detail_pic_list" :key="index">
              <img v-lazy="item" alt />
              <div class="edit">
                <mt-button @click="deletePic('detail',index,item)" type="danger">删除</mt-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail">
        <mt-field
          label="商品名称"
          :state="(/[\u4E00-\u9FA5]+/g).test(goods.name)?'success':'error'"
          placeholder="请输入商品名称"
          v-model="goods.name"
        ></mt-field>
        <mt-field
          label="商品详情"
          :state="(/[\u4E00-\u9FA5]+/g).test(goods.detail)?'success':'error'"
          placeholder="请输入商品详情"
          v-model="goods.detail"
        ></mt-field>
        <mt-field
          label="出售价格/元"
          placeholder="请输入价格"
          :state="(/\d|\s/ig.test(goods.price))?'success':'error'"
          v-model="goods.price"
        ></mt-field>
        <mt-field
          label="优惠券/元"
          placeholder="请输入价格"
          :state="(/\d/ig.test(goods.cut))?'success':'error'"
          v-model="goods.cut"
        ></mt-field>
        <mt-field
          label="所属分类"
          :state="(/[\u4E00-\u9FA5]+/g).test(goods.type)?'success':'error'"
          placeholder="请输入分类"
          v-model="goods.type"
        ></mt-field>
        <mt-field
          label="库存数量/个"
          :state="(/\d/ig.test(goods.count))?'success':'error'"
          placeholder="请输入数量"
          v-model="goods.count"
        ></mt-field>
        <mt-field
          label="商品限购/个"
          :state="(/\d/g.test(goods.maxBuy))?'success':'error'"
          placeholder="请输入数量"
          v-model="goods.maxBuy"
        ></mt-field>
        <mt-field
          label="配送费/元"
          :state="(/\d/g.test(goods.postage))?'success':'error'"
          placeholder="请输入价格"
          v-model="goods.postage"
        ></mt-field>
        <div class="save_btn">
          <div class="progress">
            <mt-progress :value="progress" v-if="progress!==0" :bar-height="5"></mt-progress>
          </div>
          <mt-button @click="upLoad" type="primary">保存</mt-button>
        </div>
      </div>
    </div>
    <input
      type="file"
      ref="getPic_mini"
      accept="image/*"
      @change="getPic_mini($event)"
      class="getpic"
    />
    <input
      type="file"
      ref="getPic_detail"
      accept="image/*"
      @change="getPic_detail($event)"
      class="getpic"
    />
  </div>
</template>

<script>
import editPic from "../../../editPic";
import { postFile, postGoods, deletePic } from "../../../http";
export default {
  data() {
    return {
      goods: {
        name: "我们",
        state: "out",
        detail: "详细介绍",
        price: "123",
        cut: "321",
        type: "我我     1      ",
        count: "11",
        maxBuy: "22",
        postage: "33"
      },
      mini_pic_list: [],
      detail_pic_list: [],
      mini_pic_list_length: 0,
      detail_pic_list_length: 0,
      blob_mini_pic_list: [],
      blob_detail_pic_list: [],
      has_mini_pic_list: new Set(),
      has_detail_pic_list: new Set(),
      progress: 0
    };
  },
  watch: {
    progress(n, o) {
      if (n >= 100) {
        this.progress = 0;
      }
    }
  },
  methods: {
    deletePic(str, index, item) {
      if (str === "mini") {
        if (item.split(":")[0] === "blob") {
          this.mini_pic_list.splice(index, 1);
          this.blob_mini_pic_list.splice(index, 1);
        } else {
          this.mini_pic_list_length -= 1;
          this.mini_pic_list.splice(index, 1);
          deletePic({
            type: "mini",
            _id: this.goods._id,
            value: item
          }).then(res => {
            console.log(res);
          });
        }
      } else if (str === "detail") {
        if (item.split(":")[0] === "blob") {
          this.detail_pic_list.splice(index, 1);
          this.blob_detail_pic_list.splice(index, 1);
        } else {
          this.detail_pic_list_length -= 1;
          this.detail_pic_list.splice(index, 1);
          deletePic({
            type: "detail",
            _id: this.goods._id,
            value: item
          }).then(res => {
            console.log(res);
          });
        }
      }
    },
    changeAddType(str) {
      if (str === "mini") {
        this.$refs.getPic_mini.click();
      } else {
        this.$refs.getPic_detail.click();
      }
    },
    getPic_detail(evt) {
      editPic(evt, "blob", blob => {
        if (this.has_detail_pic_list.has(evt.target.files[0].name)) {
          return;
        } else {
          this.has_detail_pic_list.add(evt.target.files[0].name);
          this.blob_detail_pic_list.push(blob);
          this.detail_pic_list.push(URL.createObjectURL(blob));
        }
      });
    },
    getPic_mini(evt) {
      editPic(evt, "blob", blob => {
        if (this.has_mini_pic_list.has(evt.target.files[0].name)) {
          return;
        } else {
          this.has_mini_pic_list.add(evt.target.files[0].name);
          this.blob_mini_pic_list.push(blob);
          this.mini_pic_list.push(URL.createObjectURL(blob));
        }
      });
    },
    upLoad() {
      if (document.querySelectorAll(".is-error").length > 0) return;
      let obj = {};
      obj.name = this.goods.name.replace(/\s*/gi, "");
      obj.detail = this.goods.detail.replace(/\s*/gi, "");
      obj.type = this.goods.type.replace(/\s*/gi, "");
      obj.price = Number(String(this.goods.price).replace(/\s*/gi, ""));
      obj.cut = Number(String(this.goods.cut).replace(/\s*/gi, ""));
      obj.count = Number(String(this.goods.count).replace(/\s*/gi, ""));
      obj.maxBuy = Number(String(this.goods.maxBuy).replace(/\s*/gi, ""));
      obj.postage = Number(String(this.goods.postage).replace(/\s*/gi, ""));
      if (this.goods._id) {
        obj._id = this.goods._id;
      }
      //加载进度设置
      this.progress = 0;
      let length =
        this.blob_mini_pic_list.length + this.blob_detail_pic_list.length;
      let avg = 100 / length;

      postGoods(obj).then(res => {
        this.blob_mini_pic_list.forEach((item, index) => {
          let fd = new FormData();
          fd.append("mallshop", item);
          index += this.mini_pic_list_length;
          postFile(fd, "mini-" + res.data.loadId + "-" + index)
            .then(res => {
              this.progress += avg;
            })
            .catch(err => console.log(err));
        });
        this.blob_detail_pic_list.forEach((item, index) => {
          let fd = new FormData();
          fd.append("mallshop", item);
          index += this.detail_pic_list_length;
          postFile(fd, "detail-" + res.data.loadId + "-" + index)
            .then(res => {
              this.progress += avg;
            })
            .catch(err => console.log(err));
        });
      });
    },
    edit(item) {
      try {
        if (item) {
          this.goods = item;
          this.mini_pic_list_length = item.mini_pic.length;
          this.detail_pic_list_length = item.detail_pic.length;
          this.mini_pic_list = item.mini_pic;
          this.detail_pic_list = item.detail_pic;
        }
      } catch (error) {
        this.$router.push({
          path: "/business",
          query: { from: "tab3" }
        });
      }
    }
  },
  created() {
    this.edit(this.$route.query.item);
  }
};
</script>
<style scoped>
.mmm {
  width: 100px;
  height: 100px;
}
.getpic {
  display: none;
}
.img_container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 115px;
  border: 1px solid #ccc;
  margin-left: 10px;
}
.img_item {
  height: 100%;
  margin: 0 5px;
  position: relative;
}
.edit {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  bottom: 0px;
}
.mint-button {
  width: 100%;
  border-radius: 0;
  height: 33%;
  opacity: 0.5;
}
.img_item img {
  width: 115px;
  height: 115px;
}
.mini_pic {
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: 1em;
  background-color: #fff;
  border-bottom: 2px solid rgb(177, 177, 177);
}
.pic_tips {
  height: 5%;
  padding: 10px;
}
.pic_tips i {
  font-size: 0.8em;
}
.pic_nav {
  height: 75%;
  overflow: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mint-header {
  height: 55px;
}
.add_pic_btn {
  width: 60px;
  background-color: #fff;
  color: rgb(153, 149, 149);
  font-size: 1.5em;
  height: 60px;
  border: 2px solid rgb(153, 149, 149);
  opacity: 1;
}
.save_btn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.save_btn .mint-button {
  height: 100%;
  opacity: 1;
}
.progress {
  height: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.mt-progress {
  width: 100%;
  height: 22px;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>