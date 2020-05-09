<template>
  <div id="register">
    <div class="dl_td">
      <div class="dl_zn">
        <a href="/">
          <!-- <img src="@/assets/logo.png" width="161" height="39" alt=""> -->
        </a>
        <div class="descs">欢迎登录</div>
        <a href="/" class="dl_zn_f">返回首页</a>
      </div>
    </div>
    <div class="dl_con">
      <div class="dl_yh">
        <img
          src="http://zljweb.com/images/log_bj_y.png"
          width="457"
          height="392"
          alt=""
          class="dl_bjs"
        >
        <div class="yh_k">
          <div class="yh_dl">委托用户登录</div>
          <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
            <el-tab-pane label="用户登录" name="login">
              <el-form ref="form" :model="form" label-width="80px" class="biao_d_login padding">
                <el-form-item label="登录账户">
                  <el-input v-model="form.username" placeholder="请输入登录账户"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="手机登录" name="code">
              <el-form ref="form" :model="form" label-width="80px" class="biao_d_login padding">
                <el-form-item label="手机号">
                  <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <el-input v-model="form.code" placeholder="请输入验证码" style="width: 120px;"></el-input>
                  <el-button
                    type="primary"
                    style="display:inline-block;float: right;width:120px;"
                    @click="getCode"
                    v-show="show"
                  >获取验证码</el-button>
                  <el-button
                    type="primary"
                    style="display:inline-block;float: right;width: 120px;"
                    v-show="!show"
                  >{{sum}}s重新发送</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit" style="width:100%;">登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from "@/utils";
import md5 from "js-md5";
export default {
  data() {
    return {
      activeName: "login",
      show: true,
      sum: "",
      timer: null,
      form: {},
      type:''
    };
  },
  mounted() {},
  
  created() {
    this.type = this.$route.query.type;
  },
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
        type: "3"
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
          this.$message.error(response.msg);
        }
      });
    },
    onSubmit() {
      if (isEmpty(this.form.mobile)) {
        this.$message.error("请输入手机号");
        return;
      }
      if (isEmpty(this.form.code)) {
        this.$message.error("请输入验证码");
        return;
      }
      this.$post("/api/user/loginByCode", {
        code: this.form.code,
        isagree: "1",
        mobile: this.form.mobile
      }).then(response => {
        console.log(response.data.token);
        if (response.code == 0) {
          window.localStorage.setItem("paoce_token", response.data.token);
          this.$router.push({ path: "/" });
        }
      });

      //         {
      //   "code": "string",
      //   "isagree": "string",
      //   "mobile": "string",
      //   "username": "string"
      // }
    },
    login() {
      if (isEmpty(this.form.username)) {
        this.$message.error("请输入登录账户");
        return;
      }
      if (isEmpty(this.form.password)) {
        this.$message.error("请输入密码");
        return;
      }
      this.$post("/api/user/loginByPwd", {
        username: this.form.username,
        isagree: "1",
        password: md5(this.form.password)
      }).then(response => {
        console.log(response.data.token);
        if (response.code == 0) {
          window.localStorage.setItem("paoce_token", response.data.token);
          if(this.type){
            this.$router.go(-1);
          }else{
            this.$router.push({ path: "/" });
          }
          
        }
      });
    },
    handleClick() {}
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
  /* width: 400px; */
  margin: auto;
  /* margin-top: 30px; */
}
.biao_d_login {
  width: 330px;
}

.dl_con {
  width: 100%;
  height: 686px;
  background: #aed5f7;
}
.dl_yh {
  width: 1190px;
  margin: 0 auto;
}
.dl_yh .dl_bjs {
  margin: 76px 0 0 54px;
}
.yh_k {
  width: 400px;
  height: 386px;
  background: #fff;
  float: right;
  margin-top: 94px;
}
.yh_dl {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  font-size: 21px;
  font-weight: bold;
  line-height: 50px;
  text-indent: 26px;
}
.el-tabs__item {
  padding: 0 20px;
  height: 50px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 50px;
  display: inline-block;
  list-style: none;
  font-size: 18px;
  font-weight: 500;
  color: #303133;
  position: relative;
}
</style>
