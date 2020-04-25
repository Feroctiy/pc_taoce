<template>
  <div class="max_width">
    <div class="container main_home max_width">
      <div class="top_nav">
        <div class="main_width flex justify-between">
          <div>
            <span class="padding-right">嗨，欢迎来到美券网</span>
            <span class="padding-right">请登录</span>
            <span class="padding-right">免费注册</span>
          </div>
          <div>
            <span class="padding-right">我要检测</span>
            <span class="padding-right">我要收藏</span>
            <span class="padding-right">购物车</span>
            <span class="padding-right">
              <router-link :to="{path:'/order'}">我的订单</router-link>
            </span>
            <span>手机端</span>
          </div>
        </div>
      </div>
      <div class="logo_nav main_width flex" style="margin:10px auto">
        <div>
          <img src="@/assets/log.png" alt="" width="100px">
        </div>
        <div style="width:500px;margin-left:100px;margin-top:5px;">
          <el-input placeholder="请输入内容" class="input-with-select">
            <!-- <el-select slot="prepend" placeholder="请选择">
              <el-option label="搜机构" value="1"></el-option>
              <el-option label="搜服务" value="2"></el-option>
              <el-option label="搜标准" value="3"></el-option>
              <el-option label="搜服务需求" value="4"></el-option>
            </el-select> -->
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
          <el-menu-item index="4">问答</el-menu-item>
          <el-menu-item index="/institution">机构展示</el-menu-item>
          <el-menu-item index="6">查询</el-menu-item>
          <el-menu-item index="7">检测知识</el-menu-item>
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
    <!-- <div class="main main_width bg-white">
      <el-row :gutter="0">
        <el-col :span="4" style="background:#f1f1f1;">
          <ul id="cart">
            <li>食品及农产品/酒类/饮料 /罐头 /食品添加剂</li>
            <li>建材家居 /装修装饰 /涂料</li>
            <li>化妆品 /日化用品 /生活用品</li>
            <li>宠物相关 /文教娱乐</li>
            <li>床上用品 /皮革及纺织品</li>
            <li>通信类 /家用电器 /电子电器</li>
          </ul>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-white">
            <el-row :gutter="10" style="padding:10px">
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content text-left">
                  <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                  <div>¥1900</div>
                  <div>吉林检测</div>
                  <div>吉林检测</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <img src="@/assets/2.png" alt="">
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <img src="@/assets/2.png" alt="">
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
    <div
      class="container main_home max_width main main_width max_width"
      style="background:#f1f1f1;"
    >
      <div class="cu-bar justify-center text-center margin">
        <div class="action border-title">
          <span class="text-xl text-bold">检测机构</span>
          <span class="bg-red"></span>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content text-center">
            <img src="@/assets/1.png" alt="" style="width:150px;height:80px;margin:auto;">
            <div class="text-center">吉林检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <img src="@/assets/logo.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="main main_width bg-white container main_home max_width">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="cu-bar justify-center bg-white text-center margin">
              <div class="action border-title">
                <span class="text-xl text-bold">新闻中心</span>
                <span class="bg-red"></span>
              </div>
            </div>
            <ul>
              <li class="flex justify-start">
                <div class="padding-right">
                  <div class="text-xxl text-center">45</div>
                  <div>2020/02</div>
                </div>
                <div>
                  <div class="text-xxl">2017年度法律风险防控会议</div>
                  <div>2017年度法律风险防控会议</div>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="cu-bar justify-center bg-white text-center margin">
              <div class="action border-title">
                <span class="text-xl text-bold">问答中心</span>
                <span class="bg-red"></span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>-->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "HelloWorld",
  data() {
    return {
      current: false,
      input1: "",
      input2: "",
      input3: "",
      type: "1",
      activeIndex2: "1"
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      // speed: 800,
      // effect: "fade",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      on: {
        slideChangeTransitionEnd: function() {
          this.current = true;
        },
        slideChangeTransitionStart: function() {
          this.current = false;
        }
      }
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goDetail(item) {
      this.$router.push({
        path: "/goodDetail"
      });

      // this.$router.push({
      //   path: `/goodDetail?m=${item.productId}}`
      // });
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 30px;
  background: #fff;
}
.grid-content img {
  width: 100%;
  height: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.justify-center {
  justify-content: center;
}
.bg-white {
  background-color: #fff;
}
.el-menu--horizontal > .el-submenu .el-submenu__title,
.el-menu--horizontal > .el-menu-item {
  height: 45px;
  line-height: 45px;
}
.el-menu-item {
  padding: 0 60px;
}
.top_nav {
  line-height: 40px;
  background-color: #f1f1f1;
}
#cart li {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
}
</style>
