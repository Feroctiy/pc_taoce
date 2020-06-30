 <template>
  <div class="content main_width" id="goodDetail">
    <!-- 产品详情 -->
    <el-row :gutter="20" class="margin-top bg-white padding-top" style="margin-left:0;margin-right:0" >
      <el-col :span="12">
        <div style="border:1px solid #ccc;">
          <img :src="goodsDetail.goodsImg" alt="" style="width:100%;">
        </div>
        <div class="bg-white flex justify-between" style="font-size:15px;padding:10px 20px;margin-bottom:10px;">
          <div>
            <span style="margin-right:15px;cursor: pointer;" @click="collectGood" v-if="goodsDetail.isscsp == 0" >收藏商品</span>
            <span style="margin-right:15px;cursor: pointer;" v-if="goodsDetail.isscsp == 1" >已收藏商品</span>
            <span style="cursor: pointer;" @click="collectShop" v-if="goodsDetail.isscdp == 0">收藏店铺</span>
            <span style="cursor: pointer;" v-if="goodsDetail.isscdp == 1">已收藏店铺</span>
          </div>
          <div>
            <span>成交数量</span> <span>{{goodsDetail.cgsl}}</span>
          </div> 
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div class="sp-mc">{{goodsDetail.goodsName}}</div>
          <div class="sp-item">
            <span>价格</span> 
            <span class="sp-price" v-if="opt.reportLauguage == '1'">¥{{goodsDetail.zhbgjg}}</span>
            <span class="sp-price" v-if="opt.reportLauguage == '2'">¥{{goodsDetail.enbgjg}}</span>
            <span class="sp-price" v-if="opt.reportLauguage == '3'">¥{{goodsDetail.zebgjg}}</span>
          </div>
          <div class="sp-item">
            <span>服务编号</span> <span>{{goodsDetail.goodsSn}}</span>
          </div>
          <div class="sp-item">
            <span>报告语言</span>
            <span>
              <el-button type="primary" size="small" :class="opt.reportLauguage == '1' ? '':'is-plain'" @click="getReportLauguage('1')">中文报告</el-button>
              <el-button type="primary" size="small" :class="opt.reportLauguage == '2' ? '':'is-plain'" @click="getReportLauguage('2')">英文报告</el-button>
              <el-button type="primary" size="small" :class="opt.reportLauguage == '3' ? '':'is-plain'" @click="getReportLauguage('3')" >中英文报告</el-button>
            </span>
          </div>
          <div class="sp-item">
            <span>报告形式</span>
            <span>
              <el-button type="primary" size="small" :class="opt.reportType == '1' ? '':'is-plain'"  @click="getReportType('1')" >检测报告</el-button>
              <el-button type="primary" size="small" :class="opt.reportType == '2' ? '':'is-plain'" @click="getReportType('2')" >报告证书</el-button>
            </span>
          </div>
          <div class="sp-item">
            <span>加急周期</span> 
            <el-button type="primary" size="small">{{goodsDetail.jjms}}</el-button>
          </div>
          <div class="sp-item">
            <span>检测周期</span>
            <span>{{goodsDetail.testPeriod}}</span>
          </div>
          <div class="sp-item">
            <span>业务类型</span>
            <!-- <span>{{goodsDetail.testQuali}}</span> -->
          </div>
          <div class="sp-item">
            <span>检测资质</span>
            <!-- <span>{{goodsDetail.testQuali}}</span> -->
          </div>
          <div class="sp-item">
            <span>店铺</span>
            <router-link :to="{path:'/potal', query:{ id : goodsDetail.shopid}}">
              <el-link type="primary" style="font-size:16px;">{{goodsDetail.shopName}}</el-link>
            </router-link>
          </div>
          <div class="sp-item">
            <span>服务提供商</span>
            <router-link :to="{path:'/server', query:{ id : goodsDetail.jgid}}">
              <el-link type="primary" style="font-size:16px;">{{goodsDetail.jgmc}}</el-link>
            </router-link>
          </div>
          <el-row class="margin-top padding-left">
            <el-button class="margin-right" @click="goChat">在线咨询</el-button>
            <el-button type="primary" @click="buy">立即购买</el-button>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="16" class="bg-white padding-top">
        <div class="bg-white padding">
          <el-table :data="goodsDetail.goodsCheckitemEntityList" border="" style="width: 100%">
            <el-table-column prop="capabilityLibEntity.jcxm" label="附加服务名称" width="180"></el-table-column>
            <el-table-column prop="capabilityLibEntity.bzh" label="送样数量/单" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.capabilityLibEntity.bzh + " '|' " + scope.row.capabilityLibEntity.bzhmc}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="capabilityLibEntity.jczq" label="价格/单"></el-table-column>
            <el-table-column prop="capabilityLibEntity.jcjg">
              <template slot-scope="scope">
                <el-button @click="handleClickDetail(scope.row)" type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="服务概述" name="1">
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
                  <el-table
                    :data="goodsDetail.goodsCheckitemEntityList"
                    border=""
                    style="width: 100%"
                  >
                    <el-table-column prop="capabilityLibEntity.jcxm" label="项目名称" width="180"></el-table-column>
                    <el-table-column prop="capabilityLibEntity.bzh" label="项目标准" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.capabilityLibEntity.bzh + " '|' " + scope.row.capabilityLibEntity.bzhmc}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="capabilityLibEntity.jczq" label="检测周期（工作日）"></el-table-column>
                    <el-table-column prop="capabilityLibEntity.jcjg" label="检测价格"></el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商品评价" name="2">
            <ul class="padding">
              <li style="font-size:14px;" v-for="(item,index) in commentList" :key="index">
                <div class="flex justify-between" style="line-height：35px;">
                   <div>{{item.createTime}}</div>
                   <div>
                     <el-rate v-model="item.star" disabled text-color="#ff9900"></el-rate>
                  </div>
                </div>
                <div>{{item.pjnr}}</div>
              </li>
            </ul>
            <div class="block" style="text-align:right;margin-top:30px;margin-bottom:30px;">
              <el-pagination hide-on-single-page  :page-size="pageSize" background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" ></el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-white">
          <div class="hot-title detail-title text-center">热门推荐</div>
          <div v-for="(item,index) in goodsList" :key="index" @click="goDetail(item.goods_id,item.shopid)" style="cursor: pointer;">
            <div style="text-align:center">
              <img :src="item.goods_img" alt="" style="width:80%;">
            </div>
            <div class="text-center text-df" style="line-height:30px;">{{item.goods_name}}</div>
            <div class="text-center text-df" style="line-height:30px;color:red;">¥{{item.goods_price}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 附加服务详情 -->
    <el-dialog title="详情" :visible.sync="dialogVisible" width="50%">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="项目名称"></el-table-column>
        <el-table-column prop="date" label="检测标准"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button> 
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  inject:['reload'],
  data() {
    return {
      tableData:[],
      dialogVisible:false,
      commentList:[],
      goodsList: [],
      userInfo: {},
      currentPage: 1,
      currentPage: 1,
      pageSize: 10,
      total:0,
      activeName: "1",
      goodsDetail: {},
      opt: {
        reportLauguage: "1",
        reportType: "1"
      }
    };
  },
  created() {
    this.getGoodDetail();
    this.getGoodsCommentList(this.$route.query.id);
    this.getList();
  },
  methods: {
    handleClickDetail(){
      this.dialogVisible = true;
    },
    handleClick() {},
    // 商品详情页面
    getGoodDetail() {
      
      this.$post(
        "/api/goods/goodsInfo?goods_id=" +
          this.$route.query.id +
          "&shopid=" +
          this.$route.query.shopid,
        {}
      ).then(response => {
        if (response.code == 0) {
          this.goodsDetail = response.data;
        } else {
          this.$message.error(response.msg);
        }
      });
    },
    // 收藏商品
    collectGood() {
      var _this = this;
      if (!window.localStorage.getItem("paoce_token")) {
        this.$router.push({ path: "/login", query: { type: "1" } });
        return;
      }
      this.$fetch("/api/user/addUserCollectionGoods", {
        goodsId: _this.goodsDetail.goodsId,
        shopId: _this.goodsDetail.shopid
      }).then(response => {
        if (response.code == 0) {
          _this.$message({ message: "收藏商品成功", type: "success" });
          _this.getGoodDetail();
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    // 收藏店铺
    collectShop() {
      var _this = this;
      if (!window.localStorage.getItem("paoce_token")) {
        this.$router.push({ path: "/login", query: { type: "1" } });
        return;
      }
      this.$fetch("/api/user/addUserCollectionShop", {
        id: _this.goodsDetail.shopid
      }).then(response => {
        if (response.code == 0) {
          _this.$message({ message: "收藏店铺成功", type: "success" });
          _this.getGoodDetail();
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    // 报告语言
    getReportLauguage(type) {
      this.opt.reportLauguage = type;
    },
    // 报告形式
    getReportType(type) {
      this.opt.reportType = type;
    },
    // 热门推荐
    getList() {
      this.goodsList = [];
      this.$post("/api/goods/goodsList", { limit: "3", page: "1" }).then(response => {
        this.goodsList = response.data.records;
      });
    },
    goDetail(id, shopid) {
      this.reload();
      this.$router.push({ path: "/productDetail", query: { id: id, shopid: shopid } });
    },

    handleClick() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    goChat(){
      console.log(window.localStorage.getItem("im-userInfo"))
      if (window.localStorage.getItem("im-userInfo")) { 
        window.open("http://localhost:8080","_blank")
      }else{ 
        this.webIMregister();
      }
      // 注册环信
    
      
      // this.$router.push({ path: "/chat", query: { type: "1" } });
    },
    webIMregister() {
      var _this = this;
      this.$imConn.registerUser({
        username: "username1",
        password: "password",
        nickname: "nickname",
        appKey: WebIM.config.appkey,
        apiUrl: WebIM.config.apiURL,
        success: function(res) { 
          _this.unid = res.entities.uuid;
          window.localStorage.setItem("im-userInfo",JSON.stringify(res)); 
          window.open("http://localhost:8080/contact/username1","_blank")
        },
        error: function(res) {
          console.log();
        }
      });
    },

    // 立即购买
    buy() {
      this.goodsDetail.opt = this.opt;
      window.localStorage.setItem(
        "paoce_token-detail",
        JSON.stringify(this.goodsDetail)
      );
      window.localStorage.removeItem("taoce-param");
      if (!window.localStorage.getItem("paoce_token")) {
        this.$router.push({ path: "/login", query: { type: "1" } });
        return;
      }
      this.$fetch(
        "/api/user/userInfo?token=" + window.localStorage.getItem("paoce_token")
      ).then(response => {
        console.log(response);
        if (response.isrz == "1") {
          this.$router.push({ path: "/step" });
        } else {
          this.$confirm("您还未进行认证, 是否前往认证?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$router.push({ path: "/authentication" });
            })
            .catch(() => {});
        }
      });
    },

    // 商品评价
    getGoodsCommentList(id) {
      var _this = this;
      this.$fetch("/api/goods/goodsCommentList", {
        goods_id: id,
        limit: _this.pageSize, 
        page: _this.currentPage
      }).then(response => { 
        if (response.code == 0) {
          _this.commentList = response.data.records;
          _this.commentList.forEach(v => {
            v.star = parseInt(v.star);
          });
          _this.total = response.data.total;
        }else{
          _this.$message.error(response.msg);
        }
      });
    }
  }
};
</script>

<style>
#goodDetail .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #409EFF;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
}
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

