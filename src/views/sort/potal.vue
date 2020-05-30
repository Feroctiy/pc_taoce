<template>
  <div class="max_width organizationBox">
    <div class="organization">
      <div class="b-special-cc">
        <img src="http://zljweb.com/images/tz-wz-2.png" width="534" height="25" alt="">
        <p class="organization-wz"></p>
        <div class="organization-wz gl12-organization-wz">
          <div class="gl12-organization-div" style="margin-left:20px">
            <span class="gl12-organization-span gl12-organization-i2">在线咨询</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tzsb">
      <div class="tzsb-cc">
        <div class="jgzy">
          <h3 :class=" type == '1' ? 'active':''" @click="goItem('1')">
            <img src="http://zljweb.com/images/fw-2.png">
            <p>服务方案</p>
          </h3>
          <h3 :class=" type == '2' ? 'active':''" @click="goItem('2')">
            <img src="http://zljweb.com/images/zs-2.png">
            <p>资格证书 | 报告模版</p>
          </h3>
          <h3 :class=" type == '3' ? 'active':''" @click="goItem('3')">
            <img src="http://zljweb.com/images/jg-2.png">
            <p>机构简介</p>
          </h3>
          <!-- <h3 :class=" type == '4' ? 'active':''" @click="goItem('4')">
            <img src="http://zljweb.com/images/lx-2.png">
            <p>联系机构</p>
          </h3> -->
          <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block" v-if="type == '3'">
            <p>机构简介</p>
          </div>
          <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block" v-if="type == '1'">
            <el-container style="height:auto; border: 1px solid #eee">
              <el-aside width="200px">
                <el-menu :default-openeds="['1', '2','3']" unique-opened>
                  <el-submenu index="1" v-for="(item,index) in shopCategoryList" :key="index">
                    <template slot="title">{{item.cat_one_name}}</template>
                    <el-menu-item v-for="(ite,idx) in item.twolist" :key="idx">{{ite.cate_two_name}}</el-menu-item>
                  </el-submenu>
                  <el-menu-item @click="onLineAddOrder">在线委托</el-menu-item>
                </el-menu>
              </el-aside>
              <el-container>
                <el-row :gutter="10" style="padding:10px">
                  <el-col :span="5" v-for="(item,index) in list" :key="index">
                    <div class="text-center" @click="goDetail">
                      <div style="overflow: hidden;">
                        <img src="https://jjjcn.oss-cn-beijing.aliyuncs.com/20200508/ba0e97de298c4f49bdffdcf3a2bd21a9.png"
                          style="width:100%;height:120px;margin:auto;" class="goods-item-img">
                      </div>
                      <div class="text-lg" style="color:red">¥1900</div>
                      <div class="text-df">口罩</div>
                    </div>
                  </el-col>
                </el-row>
              </el-container>
            </el-container>
          </div>
          <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block" v-if="type == '2'">
            <el-row :gutter="10" style="padding:10px">
              <el-col :span="6" v-for="(item,index) in list" :key="index">
                <div class="text-center margin-bottom" @click="goDetail">
                  <div style="overflow: hidden;">
                    <img src="@/assets/2.png" alt="" style="width:80%;height:400px;margin:auto;">
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div
            class="tzsb-jj tzsb-jjwz gl1potal"
            style="display:block;padding: 20px;"
            v-if="type == '4'"
          >
            <div class="item-org">代理商名称：近君检测有限公司</div>
            <div class="item-org">地址：上海市市辖区闵行区浦星公路800号D栋</div>
            <div class="item-org">电话：021-52698200</div>
            <div class="item-org">用户评价:
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                style="display: inline-block;"
              ></el-rate>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:15px;"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "Sort",
  data() {
    return {
      shopCategoryList: [],
      value: 3,
      type: "1",
      list: [{}]
    };
  },
  mounted() {},
  created() {
    console.log(this.$route.query.id);
    this.getShopCategoryList();
  },
  methods: {
    // 获取店铺的一级分类、二级分类
    getShopCategoryList() {
      this.$fetch("/api/category/oms/shopCategoryList", {
        shopId: this.$route.query.id
      }).then(response => {
        console.log(response);
        if (response.code == 0) {
          this.shopCategoryList = response.data;
        }
      });
    },
    // 获取店铺的商品列表
    // get
    // 自定义委托跳转
    onLineAddOrder() {
      this.$router.push({
        path: "/addOrder",
        query: { id: "", shopid: this.$route.query.id }
      });
    },
    goDetail() {},
    goItem(type) {
      this.type = type;
    }
  }
};
</script>
<style>
@import "../../style/server.css";
</style>

