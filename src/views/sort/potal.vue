<template>
    <div class="max_width">
        <div class="organization">
            <div class="b-special-cc">
                <img src="http://zljweb.com/images/tz-wz-2.png" width="534" height="25" alt="">
                <p class="organization-wz" id="OrgName">浙江方圆检测集团股份有限公司</p>
                <div class="organization-wz gl12-organization-wz">
                    <div class="gl12-organization-div">
                        <router-link to="/addOrder">
                            <span
                                class="gl12-organization-span gl12-organization-i1 zaixian-weituo"
                                id="zxwt"
                                onclick="appliclick(this)"
                            >在线委托</span>
                        </router-link>
                        <div class="gl12-organization-popup zaixian-popup">
                            <!-- <a>产品检验</a>
                            <a>检定校准</a>-->
                        </div>
                    </div>
                    <div class="gl12-organization-div" style="margin-left:20px">
                        <span class="gl12-organization-span gl12-organization-i2">在线咨询</span>
                        <div class="gl12-organization-popup zaixian-kefu">
                            <a
                                href="#"
                                onclick="open_fdimwindow('c316198d-e603-415a-9a09-47412afee104') "
                            >黄金珠宝</a>
                            <a
                                href="#"
                                onclick="open_fdimwindow('a347858c-f074-4cb7-9e09-0d713fd0352b') "
                            >浙江方圆检测集团股份有限公司</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tzsb">
            <div class="tzsb-cc">
                <div class="jgzy">
                    <h3 class="active">
                        <img src="http://zljweb.com/images/jg-2.png" width="35" height="34" alt="">
                        <p>机构简介</p>
                    </h3>
                    <h3>
                        <img src="http://zljweb.com/images/jg-2.png" width="35" height="34" alt="">
                        <p>机构简介</p>
                    </h3>
                    <h3>
                        <img src="http://zljweb.com/images/jg-2.png" width="35" height="34" alt="">
                        <p>机构简介</p>
                    </h3>
                    <h3>
                        <img src="http://zljweb.com/images/jg-2.png" width="35" height="34" alt="">
                        <p>机构简介</p>
                    </h3> 
                    <div class="tzsb-jj tzsb-jjwz gl1potal" style="display:block">
                        <p id="OrgIntroduction">浙江省计量科学研究院（ZJIM）是浙江省人民政府计量行政部门依法设置并经国家总局授权的省级法定计量检定机构，属公益一类事业单位，是浙江省科技厅重点扶植科研院所之一。ZJIM经过58年的发展，在人才队伍、科技创新、项目建设、管理能力、履职服务等方面取得长足进步，大力提升了机构的综合技术能力和服务能力，充分发挥计量在现代社会治理体系中的积极作用，为浙江经济社会发展提供强有力的支撑。
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;截至2018年10月，ZJIM在多个学科和领域建立了浙江省社会公用计量标准318项，通过法定计量机构考核授权的检定、校准和检测项目929项，通过国家实验室认可检测项目622项，通过检验检测机构资质认定的检测项目236类，计量器具国家型式评价实验室授权共12类31项。可对长度、力学、热工、电磁、无线电、声学、时间频率、化学、光学、电离辐射等领域计量器具及参数进行检定、校准和全性能检测。基本建立起有效服务科技创新和产业转型升级、适应浙江经济和社会发展需要的社会公用计量标准体系。ZJIM目前拥有实验室面积3万多平方米，设备资产超过3亿元，截至2018年10月，有在册职工267人，其中博士14人、硕士104人，正高职称14人、副高职称82人、中级职称106人，中高级职称人员约占总人数的76%。ZJIM下设电能计量研究所、流量计量研究所、热工计量研究所、力学计量研究所、长度与光学计量研究所、信息与电磁计量研究所、交通与声学计量研究所、医疗与化学计量研究所。依托专业部门建有OIML电能表国际互认实验室、国家电能表产品质量监督检验中心（浙江）、国家液体流量计量器具质量监督检验中心（浙江）、国家城市能源计量中心（浙江）、国家海洋油气资源开发装备产业计量中心（筹）、浙江省能源与环境保护计量检测重点实验室、浙江省数字精密测量技术研究重点实验室、浙江省声学振动精密测量技术研究重点实验室、浙江省测力与称重传感器工程实验室。机构同时设有院士专家工作站、博士后科研工作站、大学生见习训练基地等创新载体。
                        </p>
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
    return {};
  },
  mounted() {},
  methods: {}
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
  width: 300px;
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

