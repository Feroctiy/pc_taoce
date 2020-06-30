<template>
  <div class="main_width customer" id="balance-box">
    <div class="gl2-wddd_d">
      <div class="top_title">
        <strong>充值</strong>
      </div>
    </div>
    <div class="bg-white padding" style="font-size:14px;">
      <div class="margin-bottom">当前余额：¥{{userInfo.androidBalance}}</div>
      <div>充值金额：
        <el-input
          v-model="ruleForm.rechargeAmount"
          placeholder="请输入充值金额"
          style="width:200px;"
          size="small"
        ></el-input>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="ruleForm.payType">
          <el-radio label="1" border="" style="display:block;">支付宝</el-radio>
          <el-radio label="2" border="" style="display:block;">微信</el-radio>
          <el-radio label="3" border="" style="display:block;">线上汇款</el-radio>
        </el-radio-group>
      </div>
      <div>
        <el-button type="primary" size="small" @click="recharge">充值</el-button>
        <!-- <el-button type="primary" size="small" @click="widthdraw">提现</el-button> -->
      </div>
    </div>
    <!-- 微信 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div style="text-align: center;">
        <div style="line-height:45px;">微信支付</div>
        <vue-qr :logoSrc="imageUrl" :text="codeUrl" :size="300"></vue-qr>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>-->
    </el-dialog>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
import vueQr from "vue-qr";
import { isEmpty } from "@/utils";
export default {
  components: {
    vueQr
  },
  data() {
    return {
      ruleForm: {
        device: 2,
        rechargeAmount: "",
        payType: "1"
      },
      html: "",
      dialogVisible: false,
      codeUrl: "",
      imageUrl: "",
      userInfo: {}
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      var _this = this;
      this.$fetch("/api/user/userInfo").then(response => {
        if (response.code == 0) {
          _this.userInfo = response.data;
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    recharge() {
      var _this = this;
      this.$put("/api/order/chargeOrder", this.ruleForm).then(response => {
        console.log(response.data);
        if (response.code == 0) {
          if (_this.ruleForm.payType != "3") {
            _this.rechargeOrder(response.data);
          }
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    rechargeOrder(orderSn) {
      var _this = this;
      this.$fetch( "/api/order/chargeOrderPay?device=web&orderSn=" + orderSn + "&payType=" + this.ruleForm.payType,
        {}).then(response => {
        console.log(response);
        if (_this.ruleForm.payType == "1") {
          _this.html = response;
          let routerData = this.$router.resolve({ path: "/payGateWay", query: { htmlData: response } }); 
          window.open(routerData.href, "_blank");
        }
        if (response.code == 0) {
          if (_this.ruleForm.payType == "2") {
            _this.dialogVisible = true;
            var codeUrl = response.data.codeUrl;
            _this.codeUrl = codeUrl;
          }
        } else {
          _this.$message.error(response.msg);
        }
      });
    }
  }
};
</script>
<style>
@import "../../style/customer.css";
#balance-box .el-radio.is-bordered + .el-radio.is-bordered {
  margin-left: 0;
}
#balance-box .el-radio.is-bordered {
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
}
#balance-box .el-radio {
  color: #606266;
  cursor: pointer;
  margin-right: 30px;
  margin-bottom: 20px;
  width: 600px;
  height: 50px;
}
</style>

 


