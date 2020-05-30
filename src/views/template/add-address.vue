 
<template>
  <el-dialog :close-on-click-modal="true" :visible.sync="visible" :title="form.id ? '修改地址': '添加地址'" id="addOrUpdateAddr">
    <div>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="收件人" :label-width="formLabelWidth" prop="consignee">
          <el-input v-model="form.consignee" autocomplete="off" placeholder="请输入收件人" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="单位名称" :label-width="formLabelWidth">
          <el-input v-model="form.companyName" autocomplete="off" placeholder="请输入单位名称"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off" placeholder="请输入联系方式" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="行政区域" :label-width="formLabelWidth" prop="value">
          <el-cascader v-model="form.value" :options="options" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off" placeholder="请输入详细地址"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="handleAddress">确认</el-button>
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
        consignee: [{ required: true, message: "请输入收件人", trigger: "blur" }],
        phone: [{ required: true, message: "请输入联系方式", trigger: "blur" }],
        value: [{ required: true, message: "请选择行政区域", trigger: "change" }],
        address: [{ required: true, message: "请输入详细地址", trigger: "blur" }]
      }
    };
  },
  created() {
    var _this = this;
    this.$fetch("/api/tools/oms/getAllAddressList").then(response => {
      response.data.forEach(function(value, index) {
        var item = { value: value.dm, label: value.name, children: [] };
        _this.options.push(item);
        value.ssqdmEntityList.forEach(function(v, i) {
          _this.options[index].children.push({
            value: v.dm,
            label: v.name,
            children: []
          });
          v.ssqdmEntityList.forEach(function(x, y) {
            _this.options[index].children[i].children.push({
              value: x.dm,
              label: x.name
            });
          });
        });
      });
    });
  },
  methods: {
    handleChange(value) {
      this.form.value = value;
    },
    init(item) {
      this.visible = true;
      this.$nextTick(() => {
        if(item){
          var obj = JSON.parse(JSON.stringify(item));
          this.form = obj;
        }else{
          this.form = {} 
        }
      });
    },
    onSelected(data) {
      this.form.province = data.province.value;
      this.form.city = data.city.value;
      this.form.district = data.area.value;
    },
    handleAddress() {
      var _this = this;
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.$post("/api/user/addUserConsigneeAddress", {
            address: _this.form.address,
            city: _this.form.value[1],
            companyName: _this.form.companyName,
            consignee: _this.form.consignee,
            district: _this.form.value[2],
            phone: _this.form.phone,
            province: _this.form.value[0]
          }).then(response => {
            this.visible = false;
            this.$emit("refreshDataList");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
#addOrUpdateAddr .el-input,
#addOrUpdateAddr .el-select,
#addOrUpdateAddr .el-cascader {
  width: 400px;
}
#addOrUpdateAddr .distpicker-address-wrapper select {
  width: 130px !important;
}
</style>

 
