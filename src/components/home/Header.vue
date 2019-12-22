<template>
  <div class="home_header">
    <div :class="{'scroll':true,'big':true,'small':small}">
      <div :class="{'logo':true,'logoSmall':small}">
        <img class="img" src="./images/logo.png" alt="logo" />
      </div>
      <div :class="{'nav':true,'navSmall':small}">
        <span @click="sort()">三</span>
        <span @click="login()">
          <i>设置</i>
        </span>
      </div>
      <div :class="{'search':true,'searchSmall':small}">
        <mt-search v-model="value" cancel-text></mt-search>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 有一个最大高度 90px(默认)
 * 有一个最小高度 55px
 *
 * 上滑到 35px 的时候开始缩放 到 55px
 * 下滑到 35px 的时候开始恢复到 90px
 *
 */

export default {
  props: {
    name: String
  },
  data() {
    return {
      small: false,
      change: false,
      value: ""
    };
  },
  mounted() {
    this.addListener();
  },
  created(){
  },
  methods: {
    addListener() {
      window.onscroll = () => {
        var winScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (winScroll >= 35) {
          this.small = true;
        }
        if (winScroll < 35) {
          this.small = false;
        }
      };
    },
    login() {
      this.$router.push({
        path: "/setting"
      });
    },
    sort() {
      console.log("sort");
    }
  }
};
</script>


<style scoped>
.home_header {
  position: fixed;
  z-index: 999;
}
.mint-search {
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: red;
}

.scroll {
  width: 100%;
  top: 0;
  left: 0;
  background-color: red;
  position: fixed;
  z-index: 9;
  transition: all 0.3s linear;
}
.logo {
  height: 44px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  margin-left: 0px;
  z-index: -1;
  transition: all 0.3s linear;
}
.img {
  position: relative;
}
.logoSmall {
  transform: scale(0) translateY(-11px);
  top: -50px;
}
.searchSmall {
  transform: scale(0.75) translateY(-60px);
  height: 45px;
}
.navSmall {
  padding-top: 7px;
}
.nav {
  transition: all 0.3s linear;
  height: 44px;
  z-index: 2;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  top: 0;
  font-size: 0.8em;
}
.nav span {
  color: white;
  margin: 0 10px;
}
.search {
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  height: 45px;
  z-index: 999;
  position: relative;
  /* background-color: rgba(0, 0, 0, 0); */
  width: 100%;
}
.big {
  height: 90px;
}

.small {
  height: 55px;
}
</style>