<template>
  <div class="main_width stepBox" id="step">
    <el-form :model="param" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <!-- 订单流程 -->
      <el-card class="box-card margin-bottom">
        <div slot="header" class="clearfix"> <span class="tit">订单服务流程</span> </div>
        <div>
          <el-steps :active="active" align-center>
            <el-step title="在线委托"></el-step><el-step title="信息确认"></el-step>
            <el-step title="样品寄送"></el-step><el-step title="样品检测"></el-step>
            <el-step title="完成检测"></el-step><el-step title="报告发放"></el-step>
          </el-steps>
        </div>
      </el-card>
      <!-- 服务商品信息 -->
      <el-card class="box-card margin-bottom">
        <div slot="header" class="clearfix">
          <span class="tit">确认服务信息</span>
        </div>
        <div>
          <el-table :data="info" style="width: 100%" border="">
            <el-table-column label="服务图片" align="center">
              <template slot-scope="scope">
                <img :src="goodsDetail.goodsImg" alt="" style="width:100px">
              </template>
            </el-table-column>
            <el-table-column prop="name" label="服务名称" align="center">
              <template slot-scope="scope">
                <span>{{goodsDetail.goodsName}}</span>
              </template>
            </el-table-column>
            <el-table-column label="机构名称" align="center">
              <template slot-scope="scope">
                <span>{{goodsDetail.jgmc}}</span>
              </template>
            </el-table-column>
            <el-table-column label="检测周期" align="center">
              <template slot-scope="scope">
                <span>{{goodsDetail.serviceProtocol}}</span>
              </template>
            </el-table-column>
            <el-table-column label="价格" align="center">
              <template slot-scope="scope">
                <span v-if="param.reportLauguage == '1'">¥{{goodsDetail.zhbgjg}}</span>
                <span v-if="param.reportLauguage == '2'">¥{{goodsDetail.enbgjg}}</span>
                <span v-if="param.reportLauguage == '3'">¥{{goodsDetail.zebgjg}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
      <!-- 委托客户信息 -->
      <el-card class="box-card margin-bottom">
        <div slot="header" class="clearfix"><span class="tit">委托客户信息</span></div>
        <div>
          <el-button type="primary" size="small" class="margin-left margin-right" @click="getClient">选择委托客户+</el-button>请从用户身份认证信息中选择，若您未进行身份认证，请点击进行
          <router-link to="/authentication"><el-button type="text" class="margin-left">身份认证</el-button></router-link>
          <ul>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">委托单位名称 <span class="weit_xhx">*</span></span>
                <el-input v-model="param.wtdwmc" placeholder="请输入委托单位名称" class="container_input required" maxlength="200" ></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">委托单位英文名称</span>
                <el-input v-model="param.wtdwenmc" placeholder="请输入委托单位英文名称" class="container_input required" maxlength="200" ></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">统一社会信用代码</span>
                <el-input v-model="param.creditCode" placeholder="请输入统一社会信用代码" class="container_input required" maxlength="150"></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">委托单位地址</span>
                <el-input v-model="param.wtdwAddress" placeholder="请输入委托单位地址" class="container_input required" maxlength="200" ></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">委托单位英文地址</span>
                <el-input v-model="param.wtdwEnAddress" placeholder="请输入委托单位英文地址" class="container_input required" maxlength="200" ></el-input>
              </li>
              <li></li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">制造商与委托单位一致</span>
                <el-radio v-model="param.isZzwtYz" label="1">是</el-radio>
                <el-radio v-model="param.isZzwtYz" label="2">否</el-radio>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">制造商单位名称 <span class="weit_xhx">*</span></span>
                <el-input v-model="param.zzsdwmc" placeholder="请输入制造商单位名称" class="container_input required" maxlength="200"></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">制造商单位地址</span>
                <el-input v-model="param.zzsdwdz" placeholder="请输入制造商单位地址" class="container_input required" maxlength="200"></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">生产商与委托单位一致</span>
                <el-radio v-model="param.isScwtYz" label="1">是</el-radio>
                <el-radio v-model="param.isScwtYz" label="2">否</el-radio>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">生产商名称 <span class="weit_xhx">*</span></span>
                <el-input v-model="param.scsdwmc" placeholder="请输入生产商名称" class="container_input required" maxlength="50"></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">生产商地址</span>
                <el-input v-model="param.scsdwdz" placeholder="请输入生产商地址" class="container_input required" maxlength="200" ></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">联系人 <span class="weit_xhx">*</span> </span>
                <el-input v-model="param.consignee" placeholder="请输入联系人" class="container_input required" maxlength="50" ></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">手机 <span class="weit_xhx">*</span> </span>
                <el-input v-model="param.phone" placeholder="请输入手机" class="container_input required"  maxlength="11"></el-input>
              </li>
            </ul>
        </div>
      </el-card>
      <!-- 报告信息 -->
      <el-card class="box-card margin-bottom">
        <div slot="header" class="clearfix"><span class="tit">报告信息</span></div>
        <div>
          <ul class="shqrm_c">
            <ul id="ulSampleTypeOne">
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">报告用途</span>
                <el-select v-model="param.bgyt" placeholder="请选择">
                  <el-option v-for="item in bgytList" :key="item.value" :label="item.label" :value="item.value" ></el-option>
                </el-select>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt"> 报告数量 <span class="weit_xhx">*</span> </span>
                <el-input v-model="param.bgsl" placeholder="请输入报告数量" class="container_input required" maxlength="50" ></el-input>
                <span>份</span>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">报告语言</span>
                <el-input value="中文语言" class="container_input required" maxlength="50" disabled v-if="param.reportLauguage == '1'"></el-input>
                <el-input value="英文报告" class="container_input required" maxlength="50" disabled v-if="param.reportLauguage == '2'"></el-input>
                <el-input value="中英文报告" class="container_input required" maxlength="50" disabled v-if="param.reportLauguage == '3'"></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">结论形式</span>
                <el-select v-model="param.jlxs" placeholder="请选择">
                  <el-option v-for="item in jlxsList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">CQC申请编号</span>
                <el-input v-model="param.cqcno" placeholder="CQC申请编号" class="container_input required" maxlength="50" ></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">报告形式</span>
                <el-input value="检测报告" class="container_input required" maxlength="50" disabled v-if="param.reportType == '1'"></el-input>
                <el-input value="报告证书" class="container_input required" maxlength="50" disabled v-if="param.reportType == '2'"></el-input>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">发放方式</span>
                <el-select v-model="param.bgfsxs" placeholder="请选择">
                  <el-option v-for="item in bgfsxsList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </li>
              <li class="xiangq_ju">
                <span class="shenqrxq_bt">备注</span>
                <el-input v-model="param.cqcno" placeholder="备注" class="container_input required" maxlength="200"></el-input>
              </li>
            </ul>
            <div class="xiangq_ju" v-if="param.bgfsxs.indexOf('电子邮件') > -1">
              <span class="shenqrxq_bt">报告收取邮箱</span>
              <el-input v-model="param.bgemail" placeholder="报告收取邮箱" class="container_input required" maxlength="50"></el-input>
            </div>
            <div class="xiangq_ju" style="border-bottom: none;display:block;height:auto;" v-if="param.bgfsxs.indexOf('快递速运') > -1">
              <span class="shenqrxq_bt">报告邮寄地址<span class="weit_xhx">*</span></span>
              <el-card class="box-card" shadow="never" id="address-box">
                <div v-for="item in addressList" :key="item.id" class="text item">
                  <el-radio v-model="param.bgaddrId" :label="item.id" @change="opt">{{item.address }}</el-radio>
                </div>
              </el-card>
              <div style="margin-top: 15px;">
                <el-button type="primary" size="small" class="margin-left" @click="addAddress">新增地址+</el-button>
                <el-button type="primary" size="small" class="margin-left" v-if="addressList.length > 1">更多地址</el-button>
              </div>
            </div>
          </ul>
        </div>
      </el-card>
      <el-card class="box-card margin-bottom">
        <div class="agree">
          <span>产品服务协议</span>
          <router-link to="/addOrder2"> <el-button type="text">查看详情</el-button> </router-link>
        </div>
        <div class="text-right"><el-button style="margin-top: 12px;" type="primary" @click="next">下一步</el-button></div>
      </el-card>
      <!-- 新增地址 -->
      <add-address v-if="testStatus" ref="addaddress" @refreshDataList="getAddressList"/>
      <client v-if="clientStatus" ref="client" @getClientData="getClientData"/>
    </el-form>
  </div>
</template>

<script>
import { isEmpty } from "@/utils";
import addAddress from "../template/add-address";
import client from "../template/client";
export default {
  components: { addAddress, client },
  data() {
    return {
      param: {
        reportLauguage: "",
        reportType: "",
        wtdwmc: "",
        bgaddrId: "",
        creditCode: "",
        consignee: "",
        isScwtYz: "1",
        isZzwtYz: "1",
        bgyt: "社会证明",
        jlxs: "实测数据",
        bgfsxs: "快递速运"
      },
      rules:{},
      formLabelWidth: "120px",
      radio: "1",
      radio1: "1",
      active: 0,
      testStatus: false,
      clientStatus: false,
      info: [{}],
      bgytList: [
        { value: "社会证明", label: "社会证明" },
        { value: "其他", label: "其他" }
      ],
      jlxsList: [
        { value: "实测数据", label: "实测数据" },
        { value: "结果判定", label: "结果判定" }
      ],
      bgfsxsList: [
        { value: "快递速运", label: "快递速运" },
        { value: "电子邮件", label: "电子邮件" },
        { value: "客户自取", label: "客户自取" },
        { value: "快递速运及电子邮件", label: "快递速运及电子邮件" }
      ],
      addressList: [],
      goodsDetail: {}
    };
  },
  mounted() {},
  created() {
    this.getAddressList();
    var goodsDetail = JSON.parse(
      window.localStorage.getItem("paoce_token-detail")
    );
    this.param.reportType = goodsDetail.opt.reportType;
    this.param.reportLauguage = goodsDetail.opt.reportLauguage;
    this.goodsDetail = goodsDetail;
    if (window.localStorage.getItem("taoce-param")) {
      this.param = JSON.parse(window.localStorage.getItem("taoce-param"));
    }
  },
  methods: {
    opt(id) {
      console.log(id);
      this.param.bgaddrId = id;
    },
    getClientData(item) {
      console.log(item);
      this.param.wtdwmc = item.dwmc;
      this.param.creditCode = item.creditCode;
      this.param.consignee = item.legalPerson;
    },
    next() {
      console.log(this.param);
      if (isEmpty(this.param.wtdwmc)) {
        this.$message.error("请输入委托单位名称");
        return;
      }
      if (isEmpty(this.param.zzsdwmc)) {
        this.$message.error("请输入制造商单位名称");
        return;
      }
      if (isEmpty(this.param.scsdwmc)) {
        this.$message.error("请输入生产商名称");
        return;
      }
      if (isEmpty(this.param.phone)) {
        this.$message.error("请输入手机号");
        return;
      }
      if (isEmpty(this.param.consignee)) {
        this.$message.error("请输入联系人");
        return;
      }
      if (isEmpty(this.param.bgsl)) {
        this.$message.error("请输入报告数量");
        return;
      }

      this.param.agentId = this.goodsDetail.shopid;
      this.param.goodsId = this.goodsDetail.goodsId;
      this.param.jgid = this.goodsDetail.jgid;
      window.localStorage.setItem("taoce-param", JSON.stringify(this.param));
      this.$router.push({ path: "/step1" });
    },
    // 新增检测标准
    addAddress() {
      this.testStatus = true;
      this.$nextTick(() => {
        this.$refs.addaddress.init();
      });
    },
    getClient() {
      this.clientStatus = true;
      this.$nextTick(() => {
        this.$refs.client.init();
      });
    },
    // 获取地址列表
    getAddressList() {
      var _this = this;
      this.$fetch("/api/user/userConsigneeAddressList").then(response => {
        console.log(response);
        if (response.code == 0) {
          _this.addressList = response.data;
          if (!window.localStorage.getItem("taoce-param")) {
            _this.param.bgaddrId = response.data[0].id;
          }
        }
      });
    }
  }
};
</script>
<style>
@import "../../style/step.css";
</style>

 