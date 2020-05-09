<template>
  <div class="max_width bg-white" id="footer">
    <div class="main_width">
      <el-row :gutter="20" style="padding:20px 0;">
        <el-col :span="3">
          <div>
            <!-- <img src="@/assets/log.png" alt="" width="100%" class="text-center"> -->
          </div>
        </el-col>
        <el-col :span="15" class="text-center">
          <div class="server">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="server-item">全天候响应</div>
              </el-col>
              <el-col :span="8">
                <div class="server-item">邮寄免费</div>
              </el-col>
              <el-col :span="8">
                <div class="server-item">特色服务体验</div>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="st">新手指南</div>
                <ul>
                  <li>买家入门</li>
                  <li>卖家入门</li>
                  <li>帮助中心</li>
                </ul>
              </el-col>
              <el-col :span="6">
                <div class="st">买家服务</div>
                <ul>
                  <li>支付流程</li>
                  <li>投诉举报</li>
                </ul>
              </el-col>
              <el-col :span="6">
                <div class="st">卖家服务</div>
                <ul>
                  <li>我要开店</li>
                  <li>投诉举报</li>
                </ul>
              </el-col>
              <el-col :span="6">
                <div class="st">平台服务</div>
                <ul>
                  <li>法律声明</li>
                  <li>隐私政策</li>
                  <li>赔付退款</li>
                </ul>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="text-center st"> 小程序</div>
          <div>
            <!-- <img src="@/assets/log.png" alt="" width="200px" class="text-center"> -->
          </div>
        </el-col>
        <el-col :span="3">
          <div class="text-center st"> 公众号</div>
          <div>
            <!-- <img src="@/assets/log.png" alt="" width="200px" class="text-center"> -->
          </div>
        </el-col>
      </el-row>
      <div class="footer-item">
        <span>关于 </span>
        <span>诚聘英才</span>
        <span>联系我们</span>
        <span>COPYRIGHT 2018-2019 沪ICP备18022763号-3</span>
      </div>
      <div class="link-list">
        <span>友情链接</span>
        <span> www.ccbd.org.cn</span>
        <span>www.chinanationalbrand.org.cn</span>
        <span> www.fjppw.org.cn</span>
        <span> www.scfw.org.cn</span>
        <span> www.gdpibda.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      type: "1",
      activeIndex2: "",
      userInfo: {}
    };
  },
  created() {
    console.log("******", window.localStorage.getItem("paoce_token"));
    if (window.localStorage.getItem("paoce_token")) {
      this.$fetch(
        "/api/user/userInfo?token=" + window.localStorage.getItem("paoce_token")
      ).then(response => {
        this.userInfo = response.data;
      });
    } else {
      this.userInfo = {};
    }
    //
  },
  methods: {
    goUrl(url) {
      if (!window.localStorage.getItem("paoce_token")) {
        this.$router.push({ path: "/login" });
        return;
      }
      this.$router.push({ path: url });
    },
    loginout() {
      window.localStorage.clear();
      this.$router.push({ path: "/login" });
    }
  }
};
</script> 
<style scoped>
#footer{
  font-size: 14px;
}
#footer .server .server-item{
  font-size: 16px;
  font-weight: bold;
  line-height: 35px;
}
#footer ul li{
  font-size: 12px;
  line-height: 25px;
}
#footer .st{
  font-size: 14px;
  font-weight: bold;
  line-height: 35px;
}
#footer .footer-item {
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
}
#footer .footer-item span {
  display: inline-block;
  padding-right: 50px;
}
#footer .footer-item span:last-child {
  font-weight: 300;
  font-size: 14px;
}
#footer .link-list {
  font-size: 14px;
  padding-bottom: 20px;
}
#footer .link-list span {
  padding-right: 50px;
}
</style>
