<template>
  <div class="main_width" style="padding:0 10px;box-sizing: border-box;overflow: auto;">
    <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
      <div class="top_title wddd_xx gl2-wddd_xx">
        <strong>我的订单</strong>
      </div>
    </div>
    <div class="user_rt_cont gl2-user_rt_cont">
      <div class="ddzt_xk clear_fix" style="margin-bottom:20px">
        <ul class="dd-zt">
          <li
            class="cartIcons gl2-cartIcons"
            :class="tag == item.tag ? 'ddxz_zt':''"
            v-for="item in tagList"
            :key="item.tag"
            :tag="item.tag"
            @click="goType(item.tag)"
          >
            {{item.name}}
            <i style="display: block;" v-if="item.num">{{item.num}}</i>
          </li>
        </ul>
        <div class="qbdd_su gl2-qbdd_su">
          <el-input placeholder="请输入内容" class="input-with-select" style="width:200px" size="small">
            <el-button slot="append" size="small">查询</el-button>
          </el-input>
        </div>
      </div>
      <div id="divMain">
        <ul class="order_li gl2-order_li" v-if="dataList.length > 0">
          <li v-for="item in dataList" :key="item.orderSn">
            <table class="order_table gl2-order_table">
              <caption>
                <strong>{{item.addTime}}</strong>
                <strong>
                  订单编号：
                  <em>
                    <a class="ord_dd operate ord_dxq gl2-ord_dxq">{{item.orderSn}}</a>
                  </em>
                </strong>
                <div class="dpth_xx gl2-dpth_xx">
                  <a
                    class="ord_dd gl2-ord_dd-userimg gl2-logo-liname"
                    style="max-width:300px;"
                  >{{item.shopName}}</a>
                </div>
                <a class="ord_dd operate ord_dxq gl2-ord_dxq" @click="godetail(item.orderId)">订单详情</a>
                <a class="ord_dd operate ord_dxq gl2-ord_dxq">订单复制</a>
              </caption>
              <tbody>
                <tr class="dd_wt">
                  <td class="center ord_gd gl2-center">
                    <img :src="item.goodsImg" width="110px" height="110px">
                  </td>
                  <td class="qymc_dd gl2-companyname">{{item.goodsName}}</td>
                  <td class="ord_bk_z gl2-ord_bk_z"></td>
                  <td class="ord_bk_z">
                    <b class="ord_jg gl2-ord_jg">￥{{item.orderAmount}}</b>
                  </td>
                  <td class="ord_bk ord_bk_z">
                    <span class="ddzt_zt gl2-ddzt_zt">{{getOrderStatus(item.orderStatus)}}</span>
                  </td>
                </tr>
                <tr class="tj_dd_a" v-if="item.orderStatus == '0'">
                  <td colspan="5" style="text-align: right;padding-right:15px">
                    <span>
                      <a class="a_btn operate mrxz">编辑</a>
                      <a class="a_btn operate mrxz" @click="del">删除</a>
                    </span>
                  </td>
                </tr>
                <tr class="tj_dd_a" v-if="item.orderStatus == '1'">
                  <td colspan="5" style="text-align: right;padding-right:15px">
                    <span>
                      <a class="a_btn operate mrxz" @click="cancle(item.orderId)">取消订单</a>
                      <a class="a_btn operate mrxz" @click="samples(item.orderId)">录入送样</a>
                    </span>
                  </td>
                </tr>
                <tr class="tj_dd_a" v-if="item.orderStatus == '2'">
                  <td colspan="5" style="text-align: right;padding-right:15px">
                    <span>
                      <a class="a_btn operate mrxz" @click="gopay(item.orderId,item.orderSn)">去支付</a>
                    </span>
                  </td>
                </tr>
                <tr class="tj_dd_a" v-if="item.orderStatus == '3'">
                  <td colspan="5" style="text-align: right;padding-right:15px">
                    <span>
                      <a class="a_btn operate mrxz">查看支付</a>
                    </span>
                  </td>
                </tr>
                <tr class="tj_dd_a" v-if="item.orderStatus == '4'">
                  <td colspan="5" style="text-align: right;padding-right:15px">
                    <span>
                      <a class="a_btn operate mrxz" @click="viewLogistics(item.orderId)">查看物流</a>
                      <a class="a_btn operate mrxz" @click="confirmReceipt(item.orderId)">确认收货</a>
                    </span>
                  </td>
                </tr>
                <tr class="tj_dd_a" v-if="item.orderStatus == '5'">
                  <td colspan="5" style="text-align: right;padding-right:15px">
                    <span>
                      <a class="a_btn operate mrxz" @click="appraise(item.orderId,item.orderSn)">评价</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <div v-if="dataList.length == 0">
            <div style="line-height:100px;font-size:15px;text-align:center">暂无数据</div>
        </div>
      </div>
    </div>
    <!-- 录入送样 -->
    <samples-info v-if="samplesStatus" ref="samplesinfo" @getList="getList"/>
    <!-- 查看物流 -->
    <el-dialog title="查看物流" :visible.sync="logisticsVisible" width="30%">
      <span v-if="orderDetail.orderFfbgxxEntity">{{orderDetail.orderFfbgxxEntity.kddh}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logisticsVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 评价 -->
    <el-dialog title="评价" :visible.sync="appraiseVisible" width="50%">
      <el-form :model="appraiseform" style="width:500px;">
        <el-form-item label="订单编号" :label-width="formLabelWidth">
          <el-input v-model="appraiseform.orderSn" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="星级评价" :label-width="formLabelWidth">
          <el-rate v-model="appraiseform.star" show-text style="margin-top:8px;"></el-rate>
        </el-form-item>
        <el-form-item label="评价内容" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="appraiseform.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="appraiseVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAppraise">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { isEmpty } from "@/utils";
import samplesInfo from "../template/samples-info";
export default {
  components: { samplesInfo },
  data() {
    return {
      formLabelWidth: "100px",
      logisticsVisible: false,
      samplesStatus: false,
      appraiseVisible: false,
      appraiseform: {
        id:'',
        orderSn:'',
        star:3
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      tag: "",
      tagList: [
        { name: "全部订单", tag: "", num: "" },
        { name: "待提交", tag: "0", num: "" },
        { name: "待送样", tag: "1", num: "" },
        { name: "待付款", tag: "2", num: "" },
        { name: "服务中", tag: "3", num: "" },
        { name: "待签收", tag: "4", num: "" },
        { name: "待评价", tag: "5", num: "" },
        { name: "已取消", tag: "7", num: "" }
      ],
      dataList: [],
      page: "1",
      limit: "10",
      orderDetail:{}
    };
  },
  created() {
    if( this.$route.query.type ){
      this.tag = this.$route.query.type;
      this.handleList( this.$route.query.type );
    }else{
      this.handleList("");
    }
    
  },
  methods: {
    // 订单详情
    godetail(orderId) {
      // this.$router.push({ path: "/orderDetail", query: { orderId: orderId } });
    },
    // 查看物流
    viewLogistics(orderId) {
      this.logisticsVisible = true;
      var _this = this;
      this.$fetch("/api/order/orderInfo", {
        orderId: orderId
      }).then(response => {
        if (response.code == 0) {
          _this.orderDetail = response.data;
        }
      });
    },
    // 确认收货
    confirmReceipt(id) {
      var _this = this;
      this.$confirm("是否要确认收货?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$fetch("/api/order/confirmUserOrder", { id: id }).then(response => {
            if (response.code == 0) {
              this.$message({ type: "success", message: "已确认收货!" });
              _this.handleList(_this.tag);
            }
          });
        })
        .catch(() => {});
    },
    
    getList() {
      this.handleList(this.tag);
    },
    // 获取订单状态
    getOrderStatus(value) {
      let text = "";
      switch (value) {
        case 0:
        case "0":
          text = "草稿待提交";
          break;
        case 1:
        case "1":
          text = "待送样";
          break;
        case 2:
        case "2":
          text = "待付款";
          break;
        case 3:
        case "3":
          text = "服务中";
          break;
        case 4:
        case "4":
          text = "待签收";
          break;
        case 5:
        case "5":
          text = "待评价";
          break;
        case 6:
        case "6":
          text = "已评价";
          break;
        case 7:
        case "7":
          text = "已取消";
      }

      return text;
    },
    samples(orderId) {
      this.samplesStatus = true;
      this.$nextTick(() => {
        this.$refs.samplesinfo.init(orderId);
      });
    },
    //取消订单
    cancle(id) {
      var _this = this;
      this.$prompt("", "取消订单", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "请输入取消原因"
      })
        .then(({ value }) => {
          if (isEmpty(value)) {
            this.$message.error("请输入取消原因");
            return;
          }
          this.$fetch("/api/order/cancelUserOrder", {
            id: id,
            qxddms: value
          }).then(response => {
            if (response.code == 0) {
              this.$message({ type: "success", message: "取消成功!" });
              _this.handleList(_this.tag);
            }
          });
        })
        .catch(() => {});
    },
    // 去支付
    gopay(orderId, orderSn) {
      this.$router.push({
        path: "/orderPay",
        query: { orderId: orderId, orderSn: orderSn }
      });
    },
    goType(type) {
      this.tag = type;
      this.handleList(this.tag);
    },
    // 订单列表
    handleList(type) {
      var _this = this;
      this.$fetch("/api/order/userOrderList", {
        type: type,
        page: _this.page,
        limit: _this.limit,
        orderSn: ""
      }).then(response => {
        console.log(response);
        if (response.code == 0) {
          _this.dataList = response.data.records;
        }
      });
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 评价
    appraise(id,orderSn) {
      this.appraiseVisible = true;
      this.appraiseform.id = id;
      this.appraiseform.orderSn = orderSn;
    },
    // 评价
    handleAppraise(){
      if(isEmpty(this.appraiseform.star)){
        this.$message.error("请选择星级评价");
        return;
      }
      var _this = this;
      this.$fetch("/api/order/commentUserOrder", { 
        content: _this.appraiseform.content,
        star: _this.appraiseform.star,
        id: _this.appraiseform.id
      }).then(response => {
        console.log(response);
        if (response.code == 0) {
          this.$message({ type: "success", message: "已评价!" });
          _this.appraiseVisible = false;
          _this.handleList(_this.tag);
        }
      });
    }
  }
};
</script>
 
<style scoped>
.cartIcons {
  font-size: 15px;
}
.gl2-wddd_d {
  padding: 20px;
  height: auto !important;
}

.gl2-wddd_d .gl2-wddd_xx {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.gl2-wddd_xx strong {
  color: #747474;
  font-size: 24px;
}

.gl2-user_rt_cont {
  padding: 10px;
}
.user_rt_cont {
  padding: 18px 28px 0px 28px;
  margin-bottom: 10px;
}
.user_rt_cont {
  overflow: hidden;
  background: white;
  padding: 20px;
}
.top_title strong {
  font-size: 16px;
  color: #020308;
  border-left: 5px solid #006fb3;
  text-indent: 10px;
  display: inline-block;
  text-shadow: 3px 11px 8px rgba(249, 249, 249, 0.6);
}

.ddxz_zt {
  color: #e8393c;
  border-bottom: 2px solid #e8393c;
}
.dd-zt {
  display: inline-block;
  float: left;
  width: 729px;
  margin-top: 6px;
}
.ddzt_xk li {
  float: left;
  height: 22px;
  line-height: 22px;
  margin-right: 43px;
  cursor: pointer;
}
.ddxz_zt {
  color: #e8393c;
  border-bottom: 2px solid #e8393c;
  font-size: 15px;
}
.gl2-cartIcons i {
  background: #fe6666;
}
.cartIcons i {
  position: absolute;
  font-style: normal;
  display: inline-block;
  height: 15px;
  line-height: 16px;
  font-family: arial;
  top: -5px;
  padding: 1px 5px;
  background: #ff5722;
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
  left: 41px;
  margin: 0 0 0 2px;
  word-break: normal;
}
.gl2-cartIcons i {
  background: #fe6666;
}
.cartIcons {
  position: relative;
}

.gl2-order_li li:hover {
  border: 1px solid #e4eaee;
}

.gl2-cartIcons li {
  color: #333333;
}

.gl2-order_li li:hover caption {
  background: #f5f8fa;
}

.gl2-order_li li caption strong {
  color: #aaaaaa;
  margin-right: 20px;
}

.gl2-order_li li caption strong em {
  color: #3d3e3e;
}

.gl2-ord_dxq {
  color: #3d3e3e !important;
}

.gl2-ddzt_dzf {
  background: none;
  color: #333;
  font-size: 14px;
}

.gl2-ddzt_zt {
  background: none;
  color: #999;
}
</style>

<style>
.gl2-center img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
.center img {
  margin-top: 0px;
}
.order_li {
  overflow: hidden;
}

.order_li li {
  border: 1px solid #f1eeee;
  margin-bottom: 22px;
}

.order_li li caption {
  background: #f5f5f5;
  padding: 0 0px 0px 10px;
}

.order_li li caption strong {
  font-size: 14px;
  font-weight: normal;
  color: grey;
}

.order_li li caption a {
  color: #565252;
  font-weight: bold;
}

.order_detail_infor {
  overflow: hidden;
}

.order_detail_infor dt {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px #d2d2d2 solid;
}

.order_detail_infor dd {
  margin: 10px;
  width: 47%;
  float: left;
  line-height: 1.5;
}

.order_detail_infor dd span {
  color: grey;
}

.order_detail_infor dd a {
  background: #6600ff;
  color: white;
  padding: 5px 8px;
  border-radius: 2px;
  font-size: 12px;
  margin: 0 10px;
  cursor: pointer;
}

.favorite_nav {
  width: 100%;
  overflow: hidden;
}

.favorite_nav li {
  float: left;
  width: 50%;
  text-align: center;
  height: 35px;
  line-height: 35px;
  background: #fafafa;
  border-bottom: 1px #d2d2d2 solid;
  cursor: pointer;
}

.favorite_nav li.curr_li {
  border-bottom: 1px #e6e6e6 solid;
  font-weight: bold;
}

.favoriteWrap {
  display: none;
}

.favorite_list {
  overflow: hidden;
  width: 100%;
}

.favorite_list li {
  float: left;
  width: 175px;
  height: 175px;
}
</style>
<style>
.order_table {
  width: 100%;
  table-layout: fixed;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.order_li li caption {
  background: #f5f5f5;
  padding: 0 0px 0px 10px;
}
.order_table caption {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px #eaeaea solid;
}

.gl2-order_li li caption strong {
  color: #aaaaaa;
  margin-right: 20px;
}
.order_li li caption strong {
  font-size: 14px;
  font-weight: normal;
  color: grey;
}
.order_table caption strong {
  float: left;
  font-size: 16px;
}

.order_table caption .shop_name {
  margin: 0 15px;
  font-style: normal;
  float: left;
  font-weight: bold;
  color: #aaa;
}

.order_table caption .shop_name:before {
  content: ".";
  font-family: "151219regular";
  margin-right: 2px;
  font-size: 16px;
  font-weight: normal;
}

.order_table caption a {
  float: right;
  cursor: pointer;
}

.order_table th {
  height: 40px;
  line-height: 40px;
  background: #fafafa;
  text-align: center;
}

.order_table td {
  padding: 8px 0px 8px 0px;
  font-size: 14px;
  text-align: center;
}

.order_table td address {
  font-style: normal;
  line-height: 1.3;
}

.order_table td input {
  display: inline-block;
}

.order_table td .number {
  width: 40px;
  text-align: center;
  height: 25px;
  line-height: 25px;
}

.order_table td .jj_btn {
  width: 30.5px;
  height: 30.5px;
  line-height: 20px;
  margin-right: 5px;
}

.order_table td .a_btn {
  color: #fff;
  border-color: #ffffff;
  margin-left: 7px;
  min-width: 110px;
  height: 36px;
  line-height: 34px;
  font-size: 16px;
  display: inline-block;
}

.gl2-dpth_xx {
  margin: 7px 0 0 10px;
}
.dpth_xx {
  float: left;
  margin: 7px 0 0 128px;
}
.order_table caption a {
  float: right;
  cursor: pointer;
}
.gl2-ord_dxq {
  color: #3d3e3e !important;
}
.ord_dxq {
  height: 30px;
  line-height: 30px;
  color: #796f6f !important;
  padding: 0 6px 0 6px;
  margin-top: 2px;
  font-weight: unset !important;
  font-weight: bold;
}

.order_table td {
  padding: 8px 0px 8px 0px;
  font-size: 14px;
  text-align: center;
}
.gl2-center {
  width: 120px;
}
.ord_gd {
  height: 60px;
}
</style>








<style>
/* 我的订单 */
.order_li {
  overflow: hidden;
}
.dd_wt {
  border-bottom: 1px #eaeaea solid;
}
.order_li li {
  border: 1px solid #f1eeee;
  margin-bottom: 22px;
}
.order_table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
}
.order_li li caption {
  background: #f5f5f5;
  padding: 0 0px 0px 10px;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px #eaeaea solid;
}
.order_li li caption strong {
  font-size: 14px;
  font-weight: normal;
  color: grey;
  color: #aaaaaa;
  margin-right: 20px;
  float: left;
  font-size: 16px;
}

.dpth_xx {
  float: left;
  margin: 0px 0 0 10px;
}
.order_li li caption a {
  color: #565252;
  font-weight: bold;
}
.order_table caption a {
  float: right;
  cursor: pointer;
}
.ord_dd {
  margin-right: 16px;
}
.order_li li caption a {
  color: #565252;
  font-weight: bold;
}
.order_table caption a {
  float: right;
  cursor: pointer;
}
.gl2-logo-liname {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gl2-ord_dd-userimg {
  background: url(http://zljweb.com/images/gluserimg.png) no-repeat left center;
  background-size: 16px 18px;
  padding-left: 36px;
}
.ord_dd {
  margin-right: 16px;
}
.ord_dxq {
  height: 30px;
  line-height: 30px;
  color: #3d3e3e !important;
  padding: 0 6px 0 6px;
  margin-top: 2px;
  font-weight: unset !important;
  font-weight: bold;
}
.order_table caption a {
  float: right;
  cursor: pointer;
}
.dd_wt {
  border-bottom: 1px #eaeaea solid;
}
.order_table td {
  padding: 8px 0px 8px 0px;
  font-size: 14px;
  text-align: center;
}
.gl2-center {
  width: 120px;
}
.ord_gd {
  height: 60px;
}

.gl2-order_li .gl2-companyname {
  text-align: left;
  padding-left: 15px;
}
.order_table .qymc_dd {
  padding: 4px;
  line-height: 18px;
}
.order_table td {
  font-size: 14px;
}
.gl2-companyname {
  width: 300px;
}
.gl2-companyname a {
  display: flex;
  align-items: center;
}
.order_table td {
  padding: 8px 0px 8px 0px;
  font-size: 14px;
  text-align: center;
}

.ord_bk_z {
  border-left: 1px #eaeaea solid;
}
.gl2-ord_jg {
  color: #e8393c;
}

.ddzt_dzf {
  color: #3a3737;
  padding: 5px 7px 5px 7px;
  background: #e8e8e8;
  border-radius: 4px;
  font-size: 10px;
  padding: 3px 4px 3px 4px;
  background: #e8e8e8;
  border-radius: 4px;
  font-size: 10px;
}
.gl2-ddzt_dzf {
  background: none;
  color: #333;
  font-size: 14px;
}

.ddzt_zt {
  background: #e8e8e8;
  padding: 5px 7px 5px 7px;
  border-radius: 3px;
  color: #3a3737;
}
.gl2-ddzt_zt {
  background: none;
  color: #999;
  /* padding: 6px 15px; */
}
.gl2-order_table .tj_dd_a .mrxz {
  background: #359be3;
  color: #fff;
  border: 0;
  border-radius: 3px;
  height: auto;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding: 0 6px;
}
td {
  line-height: 4.4em;
}
</style>



