<template>
  <div class="content main_width">
    <!-- 产品详情 -->
    <el-row
      :gutter="20"
      class="margin-top bg-white padding-top"
      style="margin-left:0;margin-right:0"
    >
      <el-col :span="12">
        <div style="border:1px solid #ccc;">
          <img :src="goodsDetail.goodsImg" alt="" style="width:100%;">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div class="sp-mc">{{goodsDetail.goodsName}}</div>
          <div class="sp-item">
            <span>价格</span>
            <span class="sp-price">¥{{goodsDetail.goodsPrice}}</span>
          </div>
          <div class="sp-item">
            <span>服务编号</span>
            <span>{{goodsDetail.goodsSn}}</span>
          </div>
          <div class="sp-item">
            <span>报告语言</span>
            <span>
              <el-button
                type="primary"
                size="small"
                :class="opt.reportLauguage == '1' ? '':'is-plain'"
                @click="getReportLauguage('1')"
              >中文报告</el-button>
              <el-button
                type="primary"
                size="small"
                :class="opt.reportLauguage == '2' ? '':'is-plain'"
                @click="getReportLauguage('2')"
              >英文报告</el-button>
              <el-button
                type="primary"
                size="small"
                :class="opt.reportLauguage == '3' ? '':'is-plain'"
                @click="getReportLauguage('3')"
              >中英文报告</el-button>
            </span>
          </div>
          <div class="sp-item">
            <span>报告形式</span>
            <span>
              <el-button
                type="primary"
                size="small"
                :class="opt.reportType == '1' ? '':'is-plain'"
                @click="getReportType('1')"
              >检测报告</el-button>
              <el-button
                type="primary"
                size="small"
                :class="opt.reportType == '2' ? '':'is-plain'"
                @click="getReportType('2')"
              >报告证书</el-button>
            </span>
          </div>
          <div class="sp-item">
            <span>检测周期</span>
            <span>{{goodsDetail.serviceProtocol}}</span>
          </div>
          <div class="sp-item">
            <span>加急周期</span>
            <span>{{goodsDetail.jjms}}</span>
          </div>
          <div class="sp-item">
            <span>成交数量</span>
            <span>{{goodsDetail.jjjg}}</span>
          </div>
          <div class="sp-item">
            <span>店铺</span>
            <!-- <router-link to="/potal"> -->
              <el-link type="primary" style="font-size:16px;">{{goodsDetail.shopName}}</el-link>
            <!-- </router-link> -->
          </div>
          <div class="sp-item">
            <span>服务提供商</span>
            <!-- <router-link to="/server"> -->
              <el-link type="primary" style="font-size:16px;">{{goodsDetail.jgmc}}</el-link>
            <!-- </router-link> -->
          </div>
          <el-row class="margin-top padding-left">
            <el-button class="margin-right">在线咨询</el-button>
            <!-- <router-link to="/step"> -->
            <el-button type="primary" @click="buy">立即购买</el-button>
            <!-- </router-link> -->
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="bg-white" style="font-size:15px;padding:10px 20px;margin-bottom:10px;">
      <span style="margin-right:15px;">收藏商品</span>
      <span>收藏店铺</span>
    </div>
    <el-row :gutter="10">
      <el-col :span="16" class="bg-white padding-top">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="项目概述" name="1">
            <div>
              <div class="box-card" shadow="never">
                <div class="detail-title">
                  <span>一、服务简介</span>
                </div>
                <div class="detail-content">{{goodsDetail.goodsDesc}}</div>
                <div class="detail-title">
                  <span>二、送样信息</span>
                </div>
                <div class="detail-content">{{goodsDetail.syyq}}</div>
                <div class="detail-title">
                  <span>三、检测项目</span>
                </div>
                <div class="padding-bottom">
                  <el-table :data="goodsDetail.goodsCheckitemEntityList" border="" style="width: 100%">
                    <el-table-column prop="capabilityLibEntity.jcxm" label="项目名称" width="180"></el-table-column>
                    <el-table-column prop="capabilityLibEntity.bzh" label="项目标准" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.capabilityLibEntity.bzh + "  '|'  " + scope.row.capabilityLibEntity.bzhmc}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="capabilityLibEntity.jczq" label="检测周期（工作日）"></el-table-column>
                    <el-table-column prop="capabilityLibEntity.jcjg" label="检测价格"></el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商品评价" name="2"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-white">
          <div class="hot-title detail-title text-center">热门推荐</div>
          <div>
            <div style="text-align:center">
              <img src="https://jjjcn.oss-cn-beijing.aliyuncs.com/20200508/ba0e97de298c4f49bdffdcf3a2bd21a9.png" alt="" style="width:80%;">
            </div>
            <div class="text-center text-df" style="line-height:50px;">日常防护型口罩</div>
            <!-- <div class="text-center">￥6646.00</div> -->
          </div>
          <div>
            <div style="text-align:center">
              <img src="https://jjjcn.oss-cn-beijing.aliyuncs.com/20200508/77566458cd864ddabe59e657be389440.png" alt="" style="width:80%;">
            </div>
            <div class="text-center text-df" style="line-height:50px;">医用防护口罩</div>
            <!-- <div class="text-center">￥6646.00</div> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      img: "http://wj.zljweb.com/zljfiles/BasicImages/nzfz.jpg",
      name: "王小虎"
    };
    return {
      tableData: Array(24).fill(item),
      currentPage: 1,
      activeName: "1",
      goodsDetail: {},
      opt: {
        reportLauguage: "1",
        reportType: "1"
      }
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.$post(
      "/api/goods/goodsInfo?goods_id=" +
        this.$route.query.id +
        "&shopid=" +
        this.$route.query.shopid,
      {}
    ).then(response => {
      console.log(response);
      this.goodsDetail = response.data;
    });
  },
  methods: {
    handleClick() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    goDetail() {
      this.$router.push({ path: "/potal" });
    },
    buy() {
      this.goodsDetail.opt = this.opt;
      console.log(this.goodsDetail);
      window.localStorage.setItem( "paoce_token-detail", JSON.stringify(this.goodsDetail) );
      window.localStorage.removeItem('taoce-param')
      if (!window.localStorage.getItem("paoce_token")) {
        this.$router.push({ path: "/login",query:{ type :'1' }  });
        return;
      }
      this.$router.push({ path: "/step" });
    },
    getReportLauguage(type) {
      this.opt.reportLauguage = type;
    },
    getReportType(type) {
      this.opt.reportType = type;
    }
  }
};
</script>

<style>
</style>
<style scoped>
.sp-item span.sp-price {
  font-size: 26px;
  color: red;
}
.detail-title {
  line-height: 45px;
  padding-left: 20px;
  font-size: 16px;
}
.detail-content {
  padding: 10px 20px;
  line-height: 25px;
  font-size: 13px;
}
.hot-title {
  color: red;
  border-bottom: 1px solid #f1f1f1;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.name {
  font-size: 16px;
  line-height: 32px;
  text-align: center;
}
.sp-mc {
  font-size: 20px;
  font-weight: 700;
  line-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-width: 95%;
}
.sp-item span {
  font-size: 16px;
  line-height: 35px;
  display: inline-block;
  min-width: 120px;
}
el-link {
  font-size: 16px;
}
</style>

