<template>
  <div class="login" v-if="!isSignIn">
    <mt-header fixed title="登录 / 注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">登录</mt-tab-item>
      <mt-tab-item id="2">注册</mt-tab-item>
    </mt-navbar>
    <!-- 登录 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-field
          label="用户名"
          placeholder="请输入用户名, 3 - 8个字符"
          :state="(name.length>=3&&name.length<=8)?'success':'error'"
          v-model="name"
        ></mt-field>
        <mt-field
          label="邮箱"
          disabled
          placeholder="请输入邮箱"
          state="success"
          type="email"
          v-model="email"
        ></mt-field>
        <mt-field
          label="密码"
          :state="(password.length>=3&&password.length<=15)?'success':'error'"
          placeholder="请输入密码, 3 - 15个字符"
          type="password"
          v-model="password"
        ></mt-field>
        <mt-button size="large" color="red" @click="signIn" type="primary">登录</mt-button>
      </mt-tab-container-item>
      <!-- 注册 -->
      <mt-tab-container-item id="2">
        <mt-field
          label="用户名"
          placeholder="请输入用户名, 3 - 8个字符"
          :state="(name.length>=3&&name.length<=8)?'success':'error'"
          v-model="name"
        ></mt-field>
        <mt-field
          label="邮箱"
          disabled
          placeholder="请输入邮箱"
          state="success"
          type="email"
          v-model="email"
        ></mt-field>
        <mt-field
          label="密码"
          :state="(password.length>=3&&password.length<=15)?'success':'error'"
          placeholder="请输入密码, 3 - 15个字符"
          type="password"
          v-model="password"
        ></mt-field>
        <mt-field class="check" label="验证码" v-model="captcha">
          <div id="v_container"></div>
        </mt-field>
        <mt-button size="large" color="red" @click="signUp" type="primary">注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import gVerify from "./check/gVerify";
import { Toast } from "mint-ui";
import { async } from "q";
export default {
  data() {
    return {
      selected: "1",
      name: "togoc",
      email: "309128090@qq.com",
      password: "1111",
      identity: "normal", //business
      captcha: ""
    };
  },
  computed: {
    isSignIn() {
      return this.$store.state.user.name ? true : false;
    }
  },
  updated() {
    if (this.isSignIn) {
      this.$router.push({ path: "/" });
    }
  },
  created() {
    localStorage.removeItem("mallshoptoken");
    this.$store.state.user = {};
  },
  mounted() {
    this.verifyCode = new gVerify("v_container");
  },
  methods: {
    signIn() {
      new Promise((rs, rj) => {
        this.$store.dispatch("signIn", {
          name: "togoc",
          email: "309128090@qq.com",
          password: "1111"
        });
      })
        .then(res => {
          console.log(this.isSignIn);
        })
        .catch(err => console.log(err));
    },
    signUp() {
      if (this.verifyCode.validate(this.captcha)) {
        this.$store.dispatch("signUp", {
          name: "togoc",
          email: "309128090@qq.com",
          password: "1111"
        });
        // alert("验证码正确");
      } else {
        Toast({
          message: "验证码错误",
          position: "top",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style scoped>
.check {
  border-bottom: 1px solid #dbdbdb;
}
.mint-tab-container-item .mint-button {
  margin-top: 20px;
}
.mint-tab-container-item {
  margin-top: 20px;
}
#v_container {
  width: 190px;
  height: 50px;
}
.login {
  margin-top: 55px;
}
.mint-header {
  height: 55px;
}
</style>
