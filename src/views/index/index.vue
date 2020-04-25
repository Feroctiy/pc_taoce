<template>
  <div class="max_width">
    <div class="bg-white">
      <div class="main main_width">
        <el-row :gutter="0" style="position: relative;">
          <el-col :span="4" style="background:#f1f1f1;">
            <div style="position: relative;">
              <ul id="cart">
                <router-link to="/sort">
                  <li>食品及农产品/酒类/饮料 /罐头 /食品添加剂</li>
                </router-link>
                <li>建材家居 /装修装饰 /涂料</li>
                <li>化妆品 /日化用品 /生活用品</li>
                <li>宠物相关 /文教娱乐</li>
                <li>床上用品 /皮革及纺织品</li>
                <li>通信类 /家用电器 /电子电器</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-white">
              <el-row :gutter="10" style="padding:10px">
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content text-left">
                    <img src="@/assets/2.png" alt="" style="width:150px;height:80px;margin:auto;">
                    <div class="text-lg" style="color:red">¥1900</div>
                    <div class="text-df">吉林检测</div>
                    <div class="text-sm" style="color:#666">吉林检测</div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <!-- <el-col :span="4"></el-col> -->
          <div class="menu-dow bg-whie" v-if="dow">
            <h3>酒类</h3>
            <ul>
              <li>hh</li>
              <li>hh</li>
              <li>hh</li>
              <li>hh</li>
              <li>hh</li>
            </ul>
            <h3>酒类</h3>
            <ul>
              <li>hh</li>
              <li>hh</li>
              <li>hh</li>
              <li>hh</li>
              <li>hh</li>
            </ul>
          </div>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <img src="@/assets/2.png" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <img src="@/assets/2.png" alt="">
            </div>
          </el-col>
          <!-- <el-col :span="4"></el-col> -->
        </el-row>
      </div>
    </div>
    <div
      class="container main_home max_width main main_width max_width"
      style="background: #ebebeb;"
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
            <div class="text-center text-df">吉林检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center">
            <img src="@/assets/1.png" alt="" style="width:150px;height:80px;margin:auto;">
            <div class="text-center text-df">吉林检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center">
            <img src="@/assets/1.png" alt="" style="width:150px;height:80px;margin:auto;">
            <div class="text-center text-df">吉林检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center">
            <img src="@/assets/1.png" alt="" style="width:150px;height:80px;margin:auto;">
            <div class="text-center text-df">吉林检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center">
            <img src="@/assets/1.png" alt="" style="width:150px;height:80px;margin:auto;">
            <div class="text-center text-df">吉林检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center">
            <img src="@/assets/1.png" alt="" style="width:150px;height:80px;margin:auto;">
            <div class="text-center text-df">吉林检测</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bg-white">
      <div class="main main_width bg-white container main_home max_width">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="cu-bar justify-center bg-white text-center margin" style="padding-bottom:50px">
                <div class="action border-title">
                  <span class="text-xl text-bold">新闻中心</span>
                  <span class="bg-red"></span>
                </div>
              </div>
              <ul>
                <li class="flex justify-start" style="margin-bottom:15px;padding-left:15px;">
                  <div class="padding-right">
                    <div class="text-xxl text-center">45</div>
                    <div>2020/02</div>
                  </div>
                  <div>
                    <div class="text-xxl">2017年度法律风险防控会议</div>
                    <div>2017年度法律风险防控会议</div>
                  </div>
                </li>
                <li class="flex justify-start" style="margin-bottom:15px;padding-left:15px;">
                  <div class="padding-right">
                    <div class="text-xxl text-center">45</div>
                    <div>2020/02</div>
                  </div>
                  <div>
                    <div class="text-xxl">2017年度法律风险防控会议</div>
                    <div>2017年度法律风险防控会议</div>
                  </div>
                </li>
                <li class="flex justify-start" style="margin-bottom:15px;padding-left:15px;">
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
              <div class="cu-bar justify-center bg-white text-center margin" style="padding-bottom:50px">
                <div class="action border-title">
                  <span class="text-xl text-bold">问答中心</span>
                  <span class="bg-red"></span>
                </div>
              </div>
              <div style="background:#ebebeb;min-height:100px;padding:15px;">
                <ul>
                  <li>
                    <div class="text-xl" style="line-height:45px;"> 为了加强与区域内重点客户的联系 如何提供优质服务合作共赢？</div>
                    <div id="img">
                      <img src="@/assets/2.png" alt="">
                      <img src="@/assets/2.png" alt="">
                      <img src="@/assets/2.png" alt="">
                    </div>
                  </li>
                  <li>
                    <div class="text-xl" style="line-height:45px;"> 为了加强与区域内重点客户的联系 如何提供优质服务合作共赢？</div>
                    <div id="img">
                      <img src="@/assets/2.png" alt="">
                      <img src="@/assets/2.png" alt="">
                      <img src="@/assets/2.png" alt="">
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
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
      dow:false
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
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  font-size: 14px;
  cursor: pointer;
}
.menu-dow {
  position: absolute;
  left: 200px;
  top: 0;
  z-index: 999999999999;
  background: #fff;
  width: 50%;
  padding-left: 20px;
  min-height: 200px;
}
.menu-dow h3 {
  font-size: 16px;
  line-height: 35px;
  font-weight: bold;
}
.menu-dow ul {
  display: flex;
}
.menu-dow ul li {
  padding-right: 10px;
  font-size: 14px;
}
#img img{
  display: inline-block;
  width: 30%;
  height: 100px;
  margin-right: 15px;
}
</style>
