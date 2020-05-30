<template>
  <div class="main_width stepBox">
    <el-card class="box-card margin-bottom">
      <div slot="header" class="clearfix">
        <span class="tit">订单服务流程</span>
      </div>
      <div>
        <el-steps :active="active" align-center>
          <el-step title="在线委托"></el-step>
          <el-step title="信息确认"></el-step>
          <el-step title="样品寄送"></el-step>
          <el-step title="样品检测"></el-step>
          <el-step title="完成检测"></el-step>
          <el-step title="报告发放"></el-step>
        </el-steps>
      </div>
    </el-card>
    <!-- 样品信息 -->
    <el-card class="box-card margin-bottom">
      <div slot="header" class="clearfix">
        <span class="tit">样品信息</span>
      </div>
      <div>
        <ul class="shqrm_c" id="ulSampleMain">
          <ul id="ulSampleTypeOne">
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">样品名称<span class="weit_xhx">*</span></span>
              <el-input v-model="param.ypmc" placeholder="请输入样品名称" class="container_input required" maxlength="50" ></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">样品英文名称</span>
              <el-input v-model="param.ypenmc" placeholder="请输入样品英文名称" class="container_input required" maxlength="50"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">样品数量<span class="weit_xhx">*</span>
              </span>
              <el-input v-model="param.ypsl" placeholder="请输入样品数量" class="container_input required" maxlength="50"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">样品商标</span>
              <el-input v-model="param.ypsbmc" placeholder="如为图片等格式，可以附件形式上传" class="container_input required" maxlength="50"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">保密要求</span>
              <el-select v-model="param.ypbmyq" placeholder="请选择">
                <el-option v-for="item in ypbmyqList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">型号规格</span>
              <el-input v-model="param.ypxhgg" placeholder="请输入型号规格" class="container_input required" maxlength="50" ></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">样品退还方式</span>
              <el-select v-model="param.ypthfs" placeholder="请选择">
                <el-option v-for="item in ypthfsList" :key="item.value" :label="item.label" :value="item.value" ></el-option>
              </el-select>
            </li>
          </ul>
        </ul>
      </div>
    </el-card>
    <!-- 附加服务 -->
    <el-card class="box-card margin-bottom">
      <div slot="header" class="clearfix">
        <span class="tit">附加服务</span>
      </div>
      <div>
        <el-checkbox v-model="checked">加 急</el-checkbox>
        <div style="margin-top:10px;">
          说明：1、加急服务缩短检测周期，检测周期加急后为
          <span>{{goodsDetail.jjms}}</span>；
          2、加急服务会额外收取
          <span>{{goodsDetail.jjjg}}</span>元的服务费用
        </div>
      </div>
    </el-card>
    <el-card class="box-card margin-bottom">
      <div slot="header" class="clearfix">
        <span class="tit">检测项目</span>
      </div>
      <div>
        <el-table ref="multipleTable" :data="goodsDetail.goodsCheckitemEntityList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="项目名称" prop="capabilityLibEntity.jcxm"></el-table-column>
          <el-table-column prop="capabilityLibEntity.bzhmc" label="检测标准"></el-table-column>
          <el-table-column prop="capabilityLibEntity.bzh" label="检测标准号"></el-table-column>
        </el-table>
      </div>
      <div class="xiangq_ju" style="width: 90%;">
        <span class="shenqrxq_bt">需要沟通的其他内容</span>
        <el-input
          placeholder="请详细描述您的检测需求，方便客服根据您的需求进行确认，最长可输入200字，如备注内容较多可附件形式上传"
          class="container_input required" maxlength="200" v-model="param.xygtnr"></el-input>
      </div>
      <div class="shqrm_c">
        <li class="xiangq_ju gl2-xiangq_ju-fu" style="width: 90%;">
          <span class="shenqrxq_bt gl2-shenq-fujian">附件</span>
          <el-upload style="display: inline;" class="upload-demo" multiple :limit="1" :action="uploadUrl" :show-file-list="true"  :on-success="handleAvatarSuccess" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip" style="width: 800px;">提示：请上传小于4M的并带有公章的授权委托书（单位介绍信）附件（图片或PDF）</div>
          </el-upload>
        </li>
        <div>
          <label id="lblSapmletInfo" class="gl2-fujian-require" style="color: red;">
            <br>1.若您在“检测项目”中添加了自定义检测项，请在附件中上传对应的标准文本或规范文件；
            <br>2.如委托单中有未涉及到的必要信息，可在此上传文件补充相关信息；
            <br>3.附件格式：jpg、PDF、word、excel、压缩包；单个文件大小不超过10M；
          </label>
        </div>
        <div id="divFiles" style="padding-bottom:10px;"></div>
      </div>
    </el-card>
    <el-card class="box-card margin-bottom">
      <div slot="header" class="clearfix"> <span class="tit">接样实验室</span> </div>
      <div>
        <el-radio-group v-model="param.libid">
          <el-radio-button v-for="item in goodsDetail.receivingSampleLibEntityList" :key="item.id" :label="item.id" >{{item.mc}}</el-radio-button>
        </el-radio-group>
      </div>
      <div style="line-height:35px;"><el-link type="warning" :underline="false">{{receivingAddress}}</el-link></div>
    </el-card>
    <el-card class="box-card margin-bottom">
      <div slot="header" class="clearfix">
        <span class="tit">发票信息</span>
      </div>
      <div class="xiangq_ju" style="width: 90%;">
        <span class="shenqrxq_bt">是否需要发票</span>
        <el-radio-group v-model="param.isFp" @change="agreeChange">
          <el-radio label="1">是</el-radio>
          <el-radio label="2">否</el-radio>
        </el-radio-group>
      </div>
      <div class="margin-top" v-if="param.isFp == '1'">
        <el-button type="primary" size="small" class="margin-left" v-if="invoiceList.length > 0" @click="optInvoice">选择发票+</el-button>
        <el-button type="primary" size="small" class="margin-left" @click="addInvoice">新增发票+</el-button>
        <ul class="shqrm_c">
            <li class="xiangq_ju">
              <span class="shenqrxq_bt"> 发票抬头 <span class="weit_xhx">*</span> </span>
              <el-input placeholder="请输入发票抬头" class="container_input required" v-model="param.fptt"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt"> 纳税人识别号 <span class="weit_xhx">*</span> </span>
              <el-input placeholder="请输入纳税人识别号" class="container_input required" v-model="param.nsrsbh"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">发票类型 <span class="weit_xhx">*</span></span>
              <el-radio v-model="param.fplx" label="1">专用发票</el-radio>
              <el-radio v-model="param.fplx" label="2">普通发票</el-radio>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">注册地址 <span class="weit_xhx">*</span></span>
              <el-input placeholder="请输入注册地址" class="container_input required" v-model="param.dwzcdz"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">开户银行 <span class="weit_xhx">*</span></span>
              <el-input placeholder="请输入开户银行" class="container_input required" v-model="param.dwkhyh"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">银行账户 <span class="weit_xhx">*</span></span>
              <el-input placeholder="请输入银行账户" class="container_input required" v-model="param.dwyhzh"></el-input>
            </li>
            <li class="xiangq_ju">
              <span class="shenqrxq_bt">注册电话号码 <span class="weit_xhx">*</span></span>
              <el-input placeholder="请输入注册电话号码" class="container_input required" v-model="param.dwzcdh"></el-input>
            </li>
        </ul>
        <div class="xiangq_ju" style="border-bottom: none;">
          <span class="shenqrxq_bt">
            发票邮寄地址
            <span class="weit_xhx">*</span>
          </span>
          <el-card class="box-card" shadow="never" id="address-box">
              <div v-for="item in addressList" :key="item.id" class="text item">
                  <el-radio v-model="param.fpaddrId" :label="item.id">{{item.address }}</el-radio>
              </div>
          </el-card>
          <div style="margin-top: 15px;">
            <el-button type="primary" size="small" class="margin-left" @click="addAddress">新增地址+</el-button>
            <el-button type="primary" size="small" class="margin-left" v-if="addressList.length > 1">更多地址</el-button>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card margin-bottom">
      <div class="info">
        已选择 <span>{{ multipleSelection.length }}</span> 项服务 价格:
        <span v-if="!checked && goodsDetail.goodsCheckitemEntityList.length == multipleSelection.length">￥{{goodsDetail.goodsPrice}}</span>
        <span v-else-if="checked  && goodsDetail.goodsCheckitemEntityList.length == multipleSelection.length ">￥{{goodsDetail.goodsPrice + goodsDetail.jjjg}}</span>
        <span v-else>待预估</span>
      </div>
      <div class="text-right">
        <router-link to="/step">
          <el-button style="margin-top: 12px;">上一步</el-button>
        </router-link>
        <router-link to="/step1">
          <el-button style="margin-top: 12px;" type="info" @click="sub('1')">存草稿</el-button>
        </router-link>
        <el-button style="margin-top: 12px;" type="primary" @click="sub('2')">提交订单</el-button>
      </div>
    </el-card>
    <!-- 新增地址 -->
    <add-address v-if="testStatus" ref="addaddress"/>
  </div>
</template>

<script>
import addAddress from "../template/add-address";
import addOrUpdateInvoice from "../template/add-or-update-invoice";
import invoiceList from "../template/invoice-list";
export default {
  components: { addAddress,addOrUpdateInvoice,invoiceList },
  name: "Sort",
  data() {
    return {
      invoiceList:[],
      addressList:[],
      uploadUrl: "/apis/api/tools/uploadImg",
      fileList:[],
      param: {
        ypmc: "",
        ypenmc: "",
        ypsl: "",
        ypsbmc: "",
        ypbmyq: "一般保密",
        ypxhgg: "",
        ypthfs: "代为处理",
        isFp: "2",
        fwItemIds: "",
        isJj: "2",
        libid: ""
      },
      ypbmyqList: [
        { value: "一般保密", label: "一般保密" },
        { value: "严格保密", label: "严格保密" }
      ],
      ypthfsList: [
        { value: "代为处理", label: "代为处理" },
        { value: "客户自取", label: "客户自取" },
        { value: "邮寄", label: "邮寄" }
      ],
      checked: false,
      formLabelWidth: "120px",
      radio: "1",
      radio1: "1",
      active: 1,
      testStatus: false,
      info: [{}],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      goodsDetail: {
        receivingSampleLibEntityList: []
      },
      receivingAddress:""
    };
  },
  mounted() {},
  created() {
    this.getAddressList();
    this.getInvoiceList();
    var goodsDetail = JSON.parse(
      window.localStorage.getItem("paoce_token-detail")
    );
    this.goodsDetail = goodsDetail;
    Object.assign(
      this.param,
      JSON.parse(window.localStorage.getItem("taoce-param"))
    );
    this.param.libid = this.goodsDetail.receivingSampleLibEntityList[0].id;
    this.receivingAddress = this.goodsDetail.receivingSampleLibEntityList[0].addr;
  },
  methods: {
     // 发票列表
    getInvoiceList(){
      var _this = this;
      this.$fetch("/api/user/userInvoiceInfoList").then(response => { 
        _this.listLoading = false;
        if (response.code == 0) {
          _this.invoiceList = response.data;
        }
      });
    },
    // 获取地址列表
    getAddressList() {
      var _this = this;
      this.$fetch("/api/user/userConsigneeAddressList").then(response => {
        if (response.code == 0) {
          _this.addressList = response.data;
          _this.param.bgaddrId = response.data[0].id;
          _this.param.fpaddrId = response.data[0].id;
        }
      });
    },
    addInvoice(){
      this.status = true;
      this.$nextTick(() => { this.$refs.invoic.init(); });
    },
    optInvoice(){
      this.optInvoiceStatus = true;
      this.$nextTick(() => { this.$refs.invoicelist.init(); });
    },
    agreeChange(e) {},
    next() {
      if (this.active++ > 6) this.active = 0;
    },
    // 新增检测标准
    addAddress() {
      this.testStatus = true;
      this.$nextTick(() => {
        this.$refs.addaddress.init();
      });
    },
    handleSelectionChange(val) {
      var _this = this;
      this.param.fwItemIds = "";
      this.multipleSelection = val;
      this.multipleSelection.forEach(function(v, i) {
        _this.param.fwItemIds += v.checkId + ",";
      });
      console.log(this.param.fwItemIds);
    },
    sub(type) {
      this.param.isJj = this.checked ? "1" : "2";
      this.param.fwItemIds = this.param.fwItemIds.slice(
        0,
        this.param.fwItemIds.length - 1
      );
      this.param.isCg = type;
      this.param.isAggree = '1';

      this.$post("/api/order/addCommonOrder", this.param).then(response => {
        console.log(response);
        if(response.code == 0){
          this.$message('提交成功');
          this.$router.push({ path: "/order" });
        }
      });
    },
    handleAvatarSuccess(res, file){ 
      this.param.fjxx = res.data;
      this.fileList.push({
        name: file.name,
        url: res.data
      })
    }
  }
};
</script>
<style>
@import "../../style/step.css";
</style>
<style>
/* .xiangq_ju .el-input__inner {
  border: none;
}
.shqrm_c td {
  height: 48px;
  padding: 2px 8px 2px 14px;
}

.shqrm_c {
  width: 100%;
  padding-bottom: 4px;
}

.container_input {
  width: 70%;
  height: 38px;
  border: 0;
}

.biaoge_x {
  border: 1px solid #e0e0e0;
  height: 48px;
  padding: 8px;
}

.sqrx_bg {
  margin-top: 20px;
  margin-bottom: 11px;
}

.xiangq_ju {
  width: 29%;
  height: 46px;
  border-bottom: 1px dashed #afafaf;
  display: inline-block;
  padding: 4px 4px 4px 18px;
  margin-left: 15px;
  margin-bottom: 4px;
}

.shenqrxq_bt {
  font-size: 14px;
  color: #0269a9;
  margin-right: 8px;
  line-height: 44px;
  font-weight: bold;
}

.tjdd_xq li {
  float: left;
  width: 20%;
  font-size: 16px;
  color: #666666;
  line-height: 60px;
}

.tjdd_xq {
  background: #fff;
  padding: 10px 0px 10px 0px;
  overflow: hidden;
}

.ddtj_ys {
  color: #fe6603;
  font-size: 24px;
}

.result_submit {
  width: 210px;
  height: 68px;
  background-color: #fe6603;
  text-align: center;
  line-height: 68px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  border: 0;
}
.inputypdw {
  width: 30%;
  border: 1px solid #e2dddd;
  padding: 6px;
}
.form-control {
  border: 0;
  width: 79%;
  height: 47px;
  float: right;
}
.weit_xhx {
  color: #ff3b00;
}
.tit {
  font-size: 16px;
  color: #020308;
  border-left: 5px solid #006fb3;
  text-indent: 10px;
  display: inline-block;
  text-shadow: 3px 11px 8px rgba(249, 249, 249, 0.6);
}
.agree span {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}
#address-box .el-card__body {
  padding: 0;
}
#address-box .el-card__body .item {
  line-height: 45px;
  padding-left: 15px;
  border-bottom: 1px solid #f1f1f1;
}
 */
</style>


<style scoped>
/* .el-radio-button__inner {
  border-left: 1px solid #dcdfe6;
  border-radius: 4px;
}
.el-radio-button:last-child .el-radio-button__inner {
  border-radius: 4px;
} */
</style>

 