<template>
    <div id="register">
        <div class="dl_td">
            <div class="dl_zn">
                <a href="/">
                    <!-- <img src="@/assets/logo.png" width="161" height="39" alt=""> -->
                </a>
                <div class="descs">欢迎注册</div>
                <a href="/" class="dl_zn_f">返回首页</a>
                <a href="login" class="dl_zn_f" style="margin-right:20px">前往登录</a>
            </div>
        </div>
        <section class="zhuc_zx" style="min-height:500px">
            <el-form ref="form" :model="form" label-width="80px" class="biao_d">
                <el-form-item label="登录账户">
                    <el-input v-model="form.username" placeholder="请输入登录账户"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="form.code" placeholder="请输入验证码" style="width: 170px;"></el-input>
                    <el-button
                        type="primary"
                        style="display:inline-block;float: right;"
                        @click="getCode"
                        v-show="show"
                    >获取验证码</el-button>
                    <el-button
                        type="primary"
                        style="display:inline-block;float: right;"
                        v-show="!show"
                    >{{sum}}s重新发送</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="onSubmit" style="width:100%;">注册</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
import { isEmpty } from "@/utils";
export default {
  data() {
    return {
      show: true,
      sum: "",
      timer: null,
      form: {}
    };
  },
  mounted() {},
  methods: {
    // 获取验证码
    getCode() {
      if (isEmpty(this.form.mobile)) {
        this.$message.error("请输入手机号");
        return;
      }
      var _this = this;
      this.$fetch("/api/user/getVerifyCode", {
        phone: this.form.mobile,
        type: "1"
      }).then(response => {
        if (response.code == 0) {
          var time_count = 60;
          if (!_this.timer) {
            _this.sum = time_count;
            _this.show = false;
            _this.timer = setInterval(() => {
              if (_this.sum > 1 && _this.sum <= time_count) {
                _this.sum--;
              } else {
                _this.sum = true;
                clearInterval(_this.timer);
                _this.timer = null;
              }
            }, 1000);
          }
        }else{
          this.$message.info(response.msg);
        }
      });
    },
    onSubmit() {
      if (isEmpty(this.form.username)) {
        this.$message.error("请输入登录账户");
        return;
      }
      if (isEmpty(this.form.mobile)) {
        this.$message.error("请输入手机号");
        return;
      }
      if (isEmpty(this.form.code)) {
        this.$message.error("请输入验证码");
        return;
      }
      this.$post("/api/user/regByCode", {
        code: this.form.code,
        isagree: "string",
        mobile: this.form.mobile,
        username: this.form.username
      }).then(response => {
        console.log(response);
        this.goodsList = response.data.records;
      });

      //         {
      //   "code": "string",
      //   "isagree": "string",
      //   "mobile": "string",
      //   "username": "string"
      // }
    }
  }
};
</script> 
<style scoped>
#register .dl_td {
  width: 100%;
  height: 89px;
  overflow: hidden;
  background-color: #025ab4;
}
#register .dl_td .dl_zn {
  width: 1190px;
  height: 89px;
  margin: 0 auto;
  position: relative;
}
#register .dl_td .dl_zn img {
  margin-top: 22px;
}
#register .descs {
  font-size: 18px;
  line-height: 34px;
  border-left: 1px solid #ccc;
  position: absolute;
  left: 200px;
  top: 28px;
  padding-left: 20px;
  font-weight: bold;
  color: #fff;
}
#register .dl_zn_f {
  float: right;
  line-height: 92px;
  font-size: 14px;
  color: #bbd5ea;
}
.zhuc_zx {
  position: relative;
  background: white;
  width: 1200px;
  margin: 30px auto;
  overflow: hidden;
  padding-bottom: 6%;
}
.biao_d {
  width: 400px;
  margin: auto;
  margin-top: 30px;
}
</style>
