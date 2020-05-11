 
<template>
    <el-dialog :close-on-click-modal="true" :visible.sync="visible" :title="添加发票">
        <div>
            <el-form :model="form" :rules="rules" style="width:400px;">
                <el-form-item label="发票抬头" :label-width="formLabelWidth" prop="fptt">
                    <el-input v-model="form.consignee" autocomplete="off" placeholder="请输入发票抬头"></el-input>
                </el-form-item>
                <el-form-item label="发票类型" :label-width="formLabelWidth" prop="fplx">
                    <el-radio v-model="form.fplx" label="1">专用发票</el-radio>
                    <el-radio v-model="form.fplx" label="2">普通发票</el-radio>
                </el-form-item>
                <el-form-item label="纳税人识别号" :label-width="formLabelWidth" prop="nsrsbh">
                    <el-input v-model="form.nsrsbh" autocomplete="off" placeholder="请输入纳税人识别号"></el-input>
                </el-form-item>
                <el-form-item label="注册地址" :label-width="formLabelWidth" prop="dwzcdz">
                    <el-input v-model="form.dwzcdz" autocomplete="off" placeholder="请输入注册地址"></el-input>
                </el-form-item>
                <el-form-item label="开户银行" :label-width="formLabelWidth" prop="dwkhyh">
                    <el-input v-model="form.dwkhyh" autocomplete="off" placeholder="请输入开户银行"></el-input>
                </el-form-item>
                <el-form-item label="银行账号" :label-width="formLabelWidth" prop="dwyhzh">
                    <el-input v-model="form.dwyhzh" autocomplete="off" placeholder="请输入银行账号"></el-input>
                </el-form-item>
                <el-form-item label="注册联系人" :label-width="formLabelWidth" prop="dwzclxr">
                    <el-input v-model="form.dwzclxr" autocomplete="off" placeholder="请输入注册联系人"></el-input>
                </el-form-item>
                <el-form-item label="注册电话号码" :label-width="formLabelWidth" prop="dwzcdh">
                    <el-input v-model="form.dwzcdh" autocomplete="off" placeholder="请输入注册电话号码"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取消</el-button>
            <el-button type="primary" @click="handle">确认</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: [],
      visible: false,
      isLoading: false,
      dataList: [],
      form: {},
      formLabelWidth: "120px",
      options: [],
      rules: {
        consignee: [ { required: true, message: "请输入收件人", trigger: "blur" }],
        phone: [{ required: true, message: "请输入联系方式", trigger: "blur" }],
        value: [{ required: true, message: "请选择行政区域", trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    // 确认提交
    handle() {
      // /api/user/addUserConsigneeAddress
      var _this = this;
      this.$post("/api/user/addUserConsigneeAddress", {
        address: _this.form.address,
        city: _this.form.value[1],
        companyName: _this.form.companyName,
        consignee: _this.form.consignee,
        district: _this.form.value[2],
        phone: _this.form.phone,
        province: _this.form.value[0],
        token: window.localStorage.getItem("paoce_token")
      }).then(response => {
        this.visible = false;
        this.$emit("refreshDataList");
      });
    }
  }
};
</script>

 
