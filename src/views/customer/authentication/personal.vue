<template>
  <div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
    <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
      <div class="top_title wddd_xx gl2-wddd_xx">
        <strong>个人认证</strong>
      </div>
    </div>
    <div class="bg-white padding-top padding-bottom">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width:500px"
      >
        <el-form-item label="真实姓名" prop="trueName">
          <el-input v-model="ruleForm.trueName" placeholder="请输入真实姓名" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idNo">
          <el-input v-model="ruleForm.idNo" placeholder="请输入身份证号" maxlength="20"></el-input>
        </el-form-item>
        
        <el-form-item label="身份证反面" prop="region">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess1"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="ruleForm.idBgCover" :src="ruleForm.idBgCover" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <div>*提示：请上传小于8M的身份证图片（JPG、JPEG、PNG、BMP格式），上传的身份证照片请确保边框完整，字体清晰，亮度均匀，否则可能无法通过核验</div>
        <el-form-item>
          <el-button @click="submitForm('ruleForm')">提交</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')">返回</el-button>
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

      ruleForm: {
        idCover: "",
        idBgCover: ""
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
          this.ruleForm.token = window.localStorage.getItem("paoce_token")
          this.$post("/api/user/userAuthenticationByPerson",this.ruleForm).then(
            response => {
              console.log(response);
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.ruleForm.idCover = res.data;
    },
    handleAvatarSuccess1(res, file) {
      this.ruleForm.idBgCover = res.data;
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

