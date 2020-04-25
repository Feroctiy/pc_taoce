

<template>
    <div class="main_width">
        <el-card class="box-card margin-bottom">
            <div slot="header" class="clearfix">
                <span class="tit">订单服务流程</span>
            </div>
            <div>
                <el-steps :active="active" align-center>
                    <el-step title="在先委托"></el-step>
                    <el-step title="信息确认"></el-step>
                    <el-step title="样品寄送"></el-step>
                    <el-step title="样品检测"></el-step>
                    <el-step title="完成检测"></el-step>
                    <el-step title="报告发放"></el-step>
                </el-steps>
            </div>
        </el-card>
        <el-card class="box-card margin-bottom">
            <div slot="header" class="clearfix">
                <span class="tit">报告信息</span>
            </div>
            <div>
                <ul class="shqrm_c" id="ulSampleMain">
                    <ul id="ulSampleTypeOne">
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">
                                报告用途
                                <span class="weit_xhx">*</span>
                            </span>
                            <el-select placeholder="请选择">
                                <el-option>社会证明</el-option>
                                <el-option>其他</el-option>
                            </el-select>
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">
                                报告数量
                                <span class="weit_xhx">*</span>
                            </span>
                            <input
                                id="ToSampleQuantity"
                                name="ToSampleQuantity"
                                class="container_input required decimalstwo"
                                fieldname="报告数量"
                                type="text"
                                style="width: 38%;"
                                maxlength="9"
                                value=""
                                placeholder="请输入报告数量"
                            >
                            <span>份</span>
                            <!-- <input
                                id="ToSampleUnit"
                                name="ToSampleUnit"
                                class="inputypdw required"
                                fieldname="数量单位"
                                placeholder="请输入数量单位"
                                type="text"
                                maxlength="50"
                                value="份"
                            >-->
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">报告语言</span>
                            <input
                                id="SampleNameEn"
                                name="SampleNameEn"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">结论形式</span>
                            <el-select placeholder="请选择">
                                <el-option>实测数据</el-option>
                                <el-option>结果判定</el-option>
                            </el-select>
                        </li>
                        <li class="xiangq_ju ysjs_two">
                            <span class="shenqrxq_bt">CQC申请编号</span>
                            <input
                                id="SamplesStatus"
                                name="SamplesStatus"
                                class="container_input"
                                type="text"
                                maxlength="500"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">报告形式</span>
                            <input
                                id="Specifications"
                                name="Specifications"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">发放方式</span>
                            <input
                                id="SampleTrademark"
                                name="SampleTrademark"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                                placeholder="如为图片等格式，可以附件形式上传"
                                style="width: 225px;"
                            >
                        </li>
                    </ul>
                </ul>
                <div class="xiangq_ju" style="border-bottom:none">
                    <span class="shenqrxq_bt">
                        报告邮寄地址
                        <span class="weit_xhx">*</span>
                    </span>
                    <el-card class="box-card" style="width:500px;">
                        <div class="text item">上海市沪太路1111号</div>
                        <div class="text item">上海市沪太路1111号</div>
                        <div class="text item">上海市沪太路1111号</div>
                        <div class="text item">上海市沪太路1111号</div>
                        <div class="text item">上海市沪太路1111号</div>
                    </el-card>
                    <div style="margin-top:15px;">
                        <el-button>新增地址</el-button>
                        <el-button>更多地址</el-button>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card margin-bottom">
            <div slot="header" class="clearfix">
                <span class="tit">委托客户信息</span>
            </div>
            <div>
                <ul class="shqrm_c" id="ulSampleMain">
                    <ul id="ulSampleTypeOne">
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">
                                委托单位名称
                                <span class="weit_xhx">*</span>
                            </span>
                            <input
                                id="SampleName"
                                name="SampleName"
                                class="container_input required"
                                fieldname="样品名称"
                                type="text"
                                maxlength="50"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">委托单位英文名称</span>
                            <input
                                id="SampleNameEn"
                                name="SampleNameEn"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">
                                统一社会信用代码
                                <span class="weit_xhx">*</span>
                            </span>
                            <input
                                id="SampleNameEn"
                                name="SampleNameEn"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                                style="width:auto;"
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">批号/编号/款号</span>
                            <input
                                id="BatchNo"
                                name="BatchNo"
                                class="container_input"
                                type="text"
                                maxlength="500"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju ysjs_two">
                            <span class="shenqrxq_bt">样品描述</span>
                            <input
                                id="SamplesStatus"
                                name="SamplesStatus"
                                class="container_input"
                                type="text"
                                maxlength="500"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">型号规格</span>
                            <input
                                id="Specifications"
                                name="Specifications"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">样品商标</span>
                            <input
                                id="SampleTrademark"
                                name="SampleTrademark"
                                class="container_input"
                                type="text"
                                maxlength="50"
                                value=""
                                placeholder="如为图片等格式，可以附件形式上传"
                                style="width: 225px;"
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">样品等级</span>
                            <input
                                id="SampleGrade"
                                name="SampleGrade"
                                class="container_input"
                                type="text"
                                placeholder="如：优等品、合格品、一等品等"
                                maxlength="50"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">生产日期</span>
                            <input
                                id="ProductionDate"
                                name="ProductionDate"
                                class="container_input layuiDateTime"
                                type="text"
                                placeholder="如无需精确到日，请选择当月1号"
                                value=""
                                lay-key="1"
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">生产单位名称</span>
                            <input
                                id="ProductionUnit"
                                name="ProductionUnit"
                                class="container_input"
                                type="text"
                                placeholder="请输入样品生产单位名称"
                                maxlength="100"
                                value=""
                            >
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">贮存要求</span>
                            <el-select placeholder="请选择" class="form-control">
                                <option value="常温">常温</option>
                                <option value="保质期">保质期</option>
                                <option value="特殊要求">特殊要求</option>
                            </el-select>
                        </li>
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">保密要求</span>
                            <el-select placeholder="请选择" class="form-control">
                                <option value="常温">常温</option>
                                <option value="保质期">保质期</option>
                                <option value="特殊要求">特殊要求</option>
                            </el-select>
                        </li>
                    </ul>
                    <ul id="ulSampleTypeTwo" style="display:none;">
                        <li class="xiangq_ju">
                            <span class="shenqrxq_bt">
                                预约现场检测时间
                                <span class="weit_xhx">*</span>
                            </span>
                            <input
                                id="AppointmentTestDate"
                                name="AppointmentTestDate"
                                class="container_input layuiDateTime required"
                                type="text"
                                fieldname="预约现场检测时间"
                                placeholder="请选择预约现场检测时间"
                                maxlength="100"
                                style="width: 187px;"
                                value=""
                                lay-key="2"
                            >
                        </li>
                        <li class="xiangq_ju dizxx">
                            <span class="shenqrxq_bt">
                                预约上门地址
                                <span class="weit_xhx">*</span>
                            </span>
                            <ul class="dizhi_xx">
                                <li class="ysjs_lm">
                                    <div id="divAppointmentAddressID">
                                        <div class="addressfield active">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="AppointmentAddressID"
                                                    value="2732"
                                                    vid="0"
                                                >
                                                <span>上海市 市辖区 闵行区&nbsp;浦江镇浦星公路800号D座203室&nbsp;&nbsp;彭余曦&nbsp;15756656072</span>
                                            </label>
                                        </div>
                                        <div class="addressfield">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="AppointmentAddressID"
                                                    value="3223"
                                                    vid="0"
                                                >
                                                <span>上海市 市辖区 闵行区&nbsp;浦星公路800号D座203室&nbsp;&nbsp;彭余曦&nbsp;15756656072</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="addresslink gl3-addresslink">
                                        <a
                                            href="javascript:void(0)"
                                            onclick="addAddress('AppointmentAddressID')"
                                        >新增地址+</a>
                                        <span
                                            class="gl2-address-more addressmore"
                                            onclick="addressnone(this)"
                                        >
                                            更多地址
                                            <i class="gl3-more"></i>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </div>
        </el-card>
        <router-link to="/addOrder3">
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </router-link>
        <!--  -->
        <el-dialog title="新增地址" :visible.sync="dialogFormVisible">
            <el-form :model="form" style="width:500px;">
                <el-form-item label="收件人" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="单位名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="行政区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "Sort",
  data() {
    return {
      active: 1,
      dialogFormVisible:true,
      form:{},
      formLabelWidth:"120px"
    };
  },
  mounted() {},
  methods: {
    next() {
      if (this.active++ > 6) this.active = 0;
    }
  }
};
</script>
<style>
.shqrm_c td {
  height: 48px;
  padding: 2px 8px 2px 14px;
}

.shqrm_c {
  width: 100%;
  padding-bottom: 4px;
}

.container_input {
  width: 62%;
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
.el-input__inner {
  /* border: none; */
}
.text {
  font-size: 15px;
}

.item {
  line-height: 35px;
  /* padding-bottom: 18px; */
  border-bottom: 1px solid #f1f1f1;
}
</style>

 