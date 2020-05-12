<template>
  <div class="max_width">
    <div class="organization">
      <div class="b-special-cc">
        <img src="http://zljweb.com/images/tz-wz-2.png" width="534" height="25" alt="">
        <p class="organization-wz" id="OrgName">浙江方圆检测集团股份有限公司</p>
        <div class="organization-wz gl12-organization-wz">
          <div class="gl12-organization-div" style="margin-left:20px">
            <span class="gl12-organization-span gl12-organization-i2">在线咨询</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tzsb">
      <div class="tzsb-cc">
        <div class="jgzy">
          <h3 :class=" type == '1' ? 'active':''" @click="goItem('1')">
            <img src="http://zljweb.com/images/zs-2.png" width="35" height="34" alt="">
            <p>资格证书 | 报告模版</p>
          </h3>
          <h3 :class=" type == '2' ? 'active':''" @click="goItem('2')">
            <img src="http://zljweb.com/images/jg-2.png" width="35" height="34" alt="">
            <p>机构简介</p>
          </h3>
          <h3 :class=" type == '3' ? 'active':''" @click="goItem('3')">
            <img src="http://zljweb.com/images/lx-2.png" width="35" height="34" alt="">
            <p>联系机构</p>
          </h3>
          <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block" v-if="type == '1'">
            <el-row :gutter="10" style="padding:10px">
              <el-col :span="6" v-for="(item,index) in list" :key="index">
                <div class="text-center margin-bottom">
                  <div style="overflow: hidden;">
                    <img src="@/assets/2.png" alt="" style="width:80%;height:400px;margin:auto;">
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block" v-if="type == '2'">
            <p v-html="info.intro"></p>
          </div>
          <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block" v-if="type == '3'">
            <p v-html="info.intro"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "Sort",
  data() {
    return {
      info: {},
      type: "1"
    };
  },
  created() {
    this.getInfo();
  },
  mounted() {},
  methods: {
    getInfo() {
      var _this = this;
      this.$fetch("/api/user/agencyInfo", { id: this.$route.query.id }).then(
        response => {
          console.log(response);
          if (response.code == 0) {
            _this.info = response.data;
          }
        }
      );
    },
    goItem(type) {
      this.type = type;
    }
  }
};
</script>
<style scoped>
.organization {
  width: 100%;
  height: 350px;
  background: url(http://zljweb.com/images/jg-bj.png) no-repeat center center;
}
.b-special-cc {
  width: 1200px;
  height: 350px;
  margin: 0 auto;
}
.organization img {
  margin-top: 140px;
  margin-left: 70px;
}
.organization-wz {
  position: relative;
  font-size: 33px;
  font-weight: bold;
  margin-left: 70px;
  color: #fff;
  overflow: hidden;
  width: 534px;
  text-align: center;
  min-height: 50px;
  line-height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
}
.gl12-organization-div {
  display: inline-block;
  position: relative;
}
.gl12-organization-i2 {
  /* background: url(http://zljweb.com/images/potalkefu.png) no-repeat 93% center; */
  background-size: 18px 18px;
  background-color: #fff;
  padding-right: 30px;
}

.gl12-organization-span {
  color: #4a74bc;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  font-size: 18px;
  background-color: #fff;
  opacity: 0.9;
}
.gl12-organization-popup {
  width: 100%;
  position: absolute;
  top: 24px;
  display: none;
  background: #fff;
  box-sizing: border-box;
}
</style>

<style>
.tzsb {
  width: 100%;
  background-color: #f5f5f5;
}
.tzsb-cc {
  width: 1200px;

  margin: 0 auto;
  margin-top: 15px;
}
.jgzy {
  width: 1200px;
}
.jgzy .active {
  color: #000;
  background: rgb(239, 239, 239);
  border-top: 4px solid #457ddc;
  font-weight: bold;
}
.jgzy h3 {
  line-height: 30px;
  text-align: center;
  float: left;
  height: 75px;
  width: 400px;
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 30px;
}
.jgzy h3 img {
  float: left;
  margin-top: 21px;
  margin-left: 80px;
}
.jgzy h3 p {
  font-size: 20px;
  float: left;
  margin-top: 24px;
  margin-left: 20px;
}
.jgzy .gl1potal {
  clear: both;
  border-top-width: medium;
}
.tzsb-jjwz {
  width: 1200px;
  /* height: 750px; */
}
.tzsb-jj {
  width: 1200px;
  /* height: 770px; */
  background-color: #fff;
  margin: 0 auto;
  /* margin-top: 115px; */
}
.tzsb-jjwz p {
  font-size: 17px;
  text-indent: 2em;
  text-align: justify;
  line-height: 35px;
  padding: 30px 50px 30px 50px;
}
</style>

