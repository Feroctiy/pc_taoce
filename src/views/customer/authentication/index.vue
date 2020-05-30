<template>
  <div class="main_width customer">
    <div class="gl2-wddd_d"><div class="top_title"><strong>用户认证</strong></div></div>
    <div class="bg-white padding">
      <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
        <el-col :span="12">
          <div class="text-center auth-item" style="border:3px solid #b3d8ff">
            <div class="gl3-certification-status">
              <img src="http://zljweb.com/images/certification-no.png" id="imgPersopn">
            </div>
            <div class="gl3-certification-img">
              <img src="http://zljweb.com/images/enterprisecertification.png" alt="">
            </div>
            <router-link to="/enterpriseList">
              <el-button type="primary" plain style="width: 50%;">企业认证</el-button>
            </router-link>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="text-center auth-item" style="">
            <div class="gl3-certification-status">
              <img src="http://zljweb.com/images/certification-no.png" id="imgPersopn">
            </div>
            <div class="gl3-certification-img">
              <img src="http://zljweb.com/images/personalcertificate.png" alt="">
            </div>
            <router-link to="/personal">
              <el-button type="primary" plain style="width: 50%;">个人认证</el-button>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style>
@import "../../../style/customer.css";
</style>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.gl3-certification-status {
  display: flex;
  justify-content: flex-end;
}
.gl3-certification-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  transition: all 1s;
}
.auth-item {
  border: 3px solid #b3d8ff;
  padding-bottom: 20px;
}
</style>
