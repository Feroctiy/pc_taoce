<template>
  <div class="max_width" id="top-nav">
    <div class="container main_home max_width">
      <div class="top_nav">
        <div class="main_width flex justify-between">
          <div>
            <span class="padding-right">嗨，欢迎来到 </span>
            <router-link to="/login" v-if="!userInfo.username">
              <span class="padding-right">请登录</span>
            </router-link>
            <router-link to="/register" v-if="!userInfo.username">
              <span class="padding-right">免费注册</span>
            </router-link>
            <router-link to="/customer" v-if="userInfo.username">
              <span class="padding-right">用户名：{{userInfo.username}}</span>
            </router-link>
            <span class="padding-right" @click="loginout" v-if="userInfo.username">退出</span>
          </div>
          <div>
            <span class="padding-right cursor-pointer" @click="goUrl('/sort')">我要检测</span>
            <span class="padding-right cursor-pointer" @click="goUrl('/enter-step')">我要开店</span>
            <span class="padding-right cursor-pointer" @click="goUrl('/order')">草稿箱</span>
            <span class="padding-right cursor-pointer" @click="goUrl('/collection')">收藏夹</span>
            <el-popover placement="top-start" width="100" trigger="hover">
              <div>
                <img src="@/assets/log.png" alt="" width="100px">
              </div>
              <el-button slot="reference" type="text" size="small" style="color:#3E3E3E;">手机端</el-button>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="logo_nav main_width flex" style="margin:10px auto" id="logo_nav">
        <div class="text-center">
          <img src="@/assets/logo/logo.png" alt="" width="100px" class="text-center">
        </div>
        <div style="width:500px;margin-left:100px;margin-top:5px;">
          <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
            <el-select slot="prepend" placeholder="请选择" v-model="selectType">
              <el-option label="搜机构" value="1"></el-option>
              <el-option label="搜服务" value="2"></el-option>
              <el-option label="搜标准" value="3"></el-option>
              <el-option label="搜服务需求" value="4"></el-option>
            </el-select>
            <el-button slot="append">搜索</el-button>
          </el-input>
        </div>
      </div>
      <div class="bg-blue">
        <el-menu
          :default-active="activeIndex2"
          :default-openeds="['2']"
          class="el-menu-demo main_width"
          mode="horizontal"
          background-color="#025ab4"
          text-color="#fff"
          active-text-color="#fff"
          router
        >
          <el-menu-item index="/">产品分类</el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/news">新闻中心</el-menu-item>
          <el-menu-item index="/1">问答</el-menu-item>
          <el-menu-item index="/institution">机构展示</el-menu-item>
          <el-menu-item index="/1">查询</el-menu-item>
          <el-menu-item index="/test-knowledge">检测知识</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div>
      <el-container>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-container>
    </div>
    <div>
      <foot ref="foot"/>
    </div>
  </div>
</template>

<script>
import foot from "../template/foot";
export default {
  components: { foot },
  data() {
    return {
      input: "",
      selectType: "1",
      activeIndex2: "",
      userInfo: {
        username:''
      },
      input1: "",
      input2: "",
      input3: "",
      select: ""
    };
  },
  created() {
    if (window.localStorage.getItem("paoce_token")) {
      this.$fetch( "/api/user/userInfo?token=" + window.localStorage.getItem("paoce_token")).then(response => {
        this.userInfo = response.data;
      });
    } else {
      this.userInfo = {
        username:''
      };
    }
  },
  methods: {
    goUrl(url) {
      if (!window.localStorage.getItem("paoce_token")) {
        this.$router.push({ path: "/login" });
        return;
      }
      this.$router.push({ path: url });
    },
    loginout() {
      window.localStorage.clear();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style>
 
#logo_nav .el-select .el-input {
  width: 130px;
}
#top-nav .el-menu--horizontal > .el-submenu .el-submenu__title,
#top-nav .el-menu--horizontal > .el-menu-item {
  height: 45px;
  line-height: 45px;
}
#top-nav .el-menu-item {
  padding: 0 60px;
}
#top-nav .top_nav {
  line-height: 40px;
  background-color: #f1f1f1;
}
 
</style>
