<template>
  <div class="max_width">
    <div class="bg-white">
      <div class="main main_width">
        <el-row :gutter="0" style="position: relative;">
          <el-col :span="4" style="background:#f1f1f1;">
            <div style="position: relative;">
              <ul id="cart" @mouseover="dow = true" @mouseleave="dow = false">
                <li
                  v-for="(item,index) in categoryList"
                  :key="item.id"
                  @mouseover="selectStyle(item.id,index)"
                >
                  <el-link :underline="false">{{item.cname}}</el-link>
                </li>
                <div
                  class="menu-dow bg-whie"
                  v-if="dow"
                  style="width:800px;min-height:400px;"
                  @mouseover="dow = true"
                  @mouseleave="dow = false"
                >
                  <div v-for="item in categoryTwoList" :key="item.id">
                    <h3>{{item.cname}}</h3>
                    <ul>
                      <li
                        v-for="itm in item.categoryList"
                        :key="itm.id"
                        @click="getList(item.id,itm.id)"
                      >{{itm.cname}}</li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="bg-white">
              <el-row :gutter="10" style="padding:10px">
                <el-col :span="5" v-for="(item,index) in list" :key="index">
                  <div class="text-center" @click="goDetail(item.goods_id,item.shopid)">
                    <div style="overflow: hidden;">
                      <img
                        :src="item.goods_img"
                        alt=""
                        style="width:100%;height:120px;margin:auto;"
                        class="goods-item-img"
                      >
                    </div>
                    <div class="text-lg" style="color:red">¥{{item.goods_price}}</div>
                    <div class="text-df">{{item.goods_name}}</div>
                    <div class="text-sm" style="color:#666">{{item.jgmc}}</div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple" style="height:200px;">
              <img src="@/assets/99.png" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple" style="height:200px;">
              <img src="@/assets/100.png" alt="">
            </div>
          </el-col>
          <!-- <el-col :span="4"></el-col> -->
        </el-row>
      </div>
    </div>
    <div class="container main_home max_width main main_width max_width" style="background:#f5f5f5">
      <div class="cu-bar justify-center text-center margin">
        <div class="action border-title">
          <span class="text-xl text-bold">检测机构</span>
          <span class="bg-red"></span>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/11.jpg" alt="" style="width:120px;height:50px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">上海纺织集团检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/22.jpg" alt="" style="width:120px;height:50px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">重庆市计量质量检测研究院</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/33.jpg" alt="" style="width:100px;height:50px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">广州检验检测认证集团</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/44.jpg" alt="" style="width:100px;height:50px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">谱尼测试集团股份有限公司</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/55.jpg" alt="" style="width:100px;height:50px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">深圳市计量质量检测研究院</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/66.jpg" alt="" style="width:100px;height:50px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">中纺标检验认证股份有限公司</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bg-white">
      <div class="main main_width bg-white container main_home max_width">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div
                class="cu-bar justify-center bg-white text-center margin"
                style="padding-bottom:50px"
              >
                <div class="action border-title">
                  <span class="text-xl text-bold">新闻中心</span>
                  <span class="bg-red"></span>
                </div>
              </div>
              <ul>
                <li
                  class="flex justify-start"
                  style="margin-bottom:15px;padding-left:15px;cursor: pointer;"
                  v-for="(item,index) in newsList"
                  :key="index"
                  @click="goNewDetail(item.id)"
                >
                  <div class="padding-right">
                    <div class="text-xxl text-center">{{item.createTime.slice(8,10)}}</div>
                    <div class="text-df">{{item.createTime.slice(0,7)}}</div>
                  </div>
                  <div>
                    <div class="text-xl" style="line-height:50px;">{{item.title}}</div>
                    <!-- <div class="text-df">2017年度法律风险防控会议</div> -->
                  </div>
                </li>
              </ul>
              <div class="padding text-center">
                <router-link to="news">
                  <el-button type="primary">查看更多</el-button>
                </router-link>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div
                class="cu-bar justify-center bg-white text-center margin"
                style="padding-bottom:50px"
              >
                <div class="action border-title">
                  <span class="text-xl text-bold">问答中心</span>
                  <span class="bg-red"></span>
                </div>
              </div>
              <div style="background:#ebebeb;min-height:100px;padding:15px;">
                <ul>
                  <li v-for="(item,index) in askList" :key="index" @click="goAskDetail(item.id)" style="cursor: pointer;">
                    <div class="text-xl" style="line-height:45px;color:#409EFF;font-weight:400;">{{item.title}}</div>
                    <div class="text-df">{{item.content}}</div>
                  </li>
                </ul>
                <div class="padding text-center">
                  <router-link to="answer">
                    <el-button type="primary">查看更多</el-button>
                  </router-link>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: false,
      input1: "",
      input2: "",
      input3: "",
      type: "1",
      dow: true,
      list: [],
      categoryList: [],
      categoryTwoList: [],
      newsList: [],
      askList: []
    };
  },
  created() {
    this.dow = false;
    if (window.sessionStorage.getItem("categoryList")) {
      this.categoryList = JSON.parse(
        window.sessionStorage.getItem("categoryList")
      );
    } else {
      this.$fetch("/api/category/oms/getIndexCategoryList").then(response => {
        this.categoryList = response.data[0].categoryList;
        window.sessionStorage.setItem(
          "categoryList",
          JSON.stringify(this.categoryList)
        );
      });
    }

    this.getGoodList();
    this.getAgentList();
    this.getNewsList();
    this.getAskList();
  },
  methods: {
    // 新闻列表
    getNewsList() {
      var _this = this;
      this.$fetch("/api/news/list", { limit: 4, page: 1 }).then(response => {
        _this.loading = false;
        if (response.code == 0) {
          _this.newsList = response.data.records;
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    goNewDetail(id){
      this.$router.push({ path: "/news-detail", query: { id: id } });
    },
    // 问答列表
    getAskList() {
      var _this = this;
      this.$fetch("/api/ask/list", { limit: 4, page: 1 }).then(response => {
        _this.loading = false;
        if (response.code == 0) {
          _this.askList = response.data.records;
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    goAskDetail(id){
      this.$router.push({ path: "/ask-detail", query: { id: id } });
    },

    // 代理商列表
    getAgentList() {
      this.$fetch("/api/user/agentList", { limit: "10", page: "1" }).then(
        response => {
          console.log(response);
        }
      );
    },

    selectStyle(id, index) {
      this.dow = true;
      this.oneid = id;
      this.categoryTwoList = this.categoryList[index].categoryList;
    },
    outStyle() {
      this.dow = false;
    },
    getList(twoid, threeid) {
      this.twoid = twoid;
      this.threeid = threeid;
      console.log(this.oneid, this.twoid, this.threeid);
      this.$router.push({
        path: "/product",
        query: {
          cateOne: this.oneid,
          cateTwo: this.twoid,
          cateThree: this.threeid
        }
      });
    },
    // 商品列表
    getGoodList() {
      var _this = this;
      this.$post("/api/goods/goodsList", { limit: "15", page: "1" }).then(
        response => {
          if (response.code == 0) {
            _this.list = response.data.records;
          }
        }
      );
    },
    goDetail(id, shopid) {
      this.$router.push({
        path: "/productDetail",
        query: { id: id, shopid: shopid }
      });
    }
  }
};
</script>
<style scoped>
.el-col-5 {
  width: calc(100% / 5);
}
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
  margin: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
}
#cart li:hover {
  background: #ccc;
  border-radius: 1px;
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
#img img {
  display: inline-block;
  width: 30%;
  height: 100px;
  margin-right: 15px;
}
.goods-item-img {
  -webkit-transition: ease 0.2s;
  transition: ease 0.2s;
  -webkit-transform-origin: 50% 50%;
  /* transform-origin默认值就是居中，可以不加 */
  transform-origin: 50% 50%;
  /* transform-origin默认值就是居中，可以不加 */
}

.goods-item-img:hover {
  -webkit-transform: scale(2);
  /*放大1.2倍*/
  transform: scale(2);
  /*放大1.2倍*/
}
</style>
