<template>
  <div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
    <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
      <div class="top_title wddd_xx gl2-wddd_xx">
        <strong>企业认证</strong>
      </div>
    </div>
    <div class="bg-white padding-top padding-bottom">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="180px"
        class="demo-ruleForm"
        style="width:500px"
      >
        <el-form-item label="统一社会信用代码" prop="creditCode">
          <el-input v-model="ruleForm.creditCode" placeholder="请输入真实姓名" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="企业名称" prop="dwmc">
          <el-input v-model="ruleForm.dwmc" placeholder="请输入身份证号" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人" prop="legalPerson">
          <el-input v-model="ruleForm.legalPerson" placeholder="请输入身份证号" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="营业执照" prop="region">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess1"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="ruleForm.businessLicense" :src="ruleForm.businessLicense" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="授权委托书(单位介绍信)" prop="region">
          <el-upload
            class="upload-demo"
            multiple
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip" style="width: 800px;">提示：请上传小于4M的并带有公章的授权委托书（单位介绍信）附件（图片或PDF）</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          
          <el-button  @click="resetForm('ruleForm')">返回</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploadUrl: "/apis/api/tools/uploadImg",
      fileList:[],

      ruleForm: {
        businessLicense: "",
        pzImg: ""
      },
      imageUrl: "",
      rules: {
        trueName: [
          { required: true, message: "请输入真实姓名", trigger: "blur" }
        ],
        idNo: [{ required: true, message: "请选择身份证号", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          this.ruleForm.token = window.localStorage.getItem("paoce_token");
          this.$post(
            "/api/user/userAuthenticationByCompany",
            this.ruleForm
          ).then(response => {
            console.log(response);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file){
      console.log(res,file);
      this.ruleForm.pzImg = res.data;
      this.fileList.push({
        name: file.name,
        url: res.data
      })
    },
    handleAvatarSuccess1(res, file) {
      console.log(res);
      this.ruleForm.businessLicense = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

