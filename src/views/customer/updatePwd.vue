<template>
    <div class="main_width customer" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
        <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
            <div class="top_title wddd_xx gl2-wddd_xx">
                <strong>修改密码</strong>
            </div>
        </div>
        <div class="bg-white padding">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width:400px;">
                <el-form-item label="手机号">
                    <el-input v-model="phone" placeholder="请输入手机号" maxlength="11" disabled></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input v-model="ruleForm.code" placeholder="请输入验证码" maxlength="6"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入新密码" maxlength="16" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="newPassword">
                    <el-input v-model="ruleForm.newPassword" placeholder="请输入确认密码" maxlength="16" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { isEmpty,starPhone } from "@/utils";
export default {
  data() {
    var validateComfirmPassword = (rule, value, callback) => {
        if (!/\S/.test(value)) {
            callback(new Error('请输入确认密码'))
        } else if (this.ruleForm.password !== value) {
            callback(new Error('确认密码与新密码输入不一致'))
        } else {
            callback()
        }
    }
    return {
        phone:"",
        ruleForm: {},
        userInfo:{},
        rules: {
            code: [
                { required: true, message: "请输入验证码", trigger: "blur" }
            ],
            password: [
                { required: true, message: "请输入新密码", trigger: "blur" }
            ],
            newPassword: [
                { required: true, message: "请输入确认密码", trigger: "blur" },
                { required: true, validator: validateComfirmPassword, trigger: "blur" }
            ]
        }
    };
  },
  created() {
      this.getUserInfo();
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    // 获取用户信息
    getUserInfo() {
      var _this = this;
      this.$fetch("/api/user/userInfo").then(response => {
        if (response.code == 0) {
          _this.userInfo = response.data;
          _this.phone = starPhone(_this.userInfo.username)
        }
      });
    }
  }
};
</script>
<style>
@import "../../style/customer.css";
</style>