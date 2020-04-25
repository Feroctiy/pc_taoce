<template>
    <div class="gl1-news-content">
        <div class="page-left-title">
            <span class="cpbt">
                <!-- <img src="../../images/image/xinw.png" width="26" height="28" alt=""> 行业资讯 -->
            </span>
        </div>
        <div class="gl1-news-cont">
            <div class="gl1-news-left">
                <div class="gl1-news-one">
                    <h1 class="gl1-news-h">
                        <span class="gl1-blue-title" id="todaytitle1">今日资讯</span>
                    </h1>
                    <ul class="gl1-news-ul" id="todayNews1">
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="gl1-news-one">
                    <h1 class="gl1-news-h">
                        <span class="gl1-blue-title" id="todaytitle1">今日资讯</span>
                    </h1>
                    <ul class="gl1-news-ul" id="todayNews1">
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="111" href="javascript:;">
                                <span>CNAS@你 | 《认证机构认可规则》（CNAS-RC01:2020）等系列规范文件有新修订</span>
                                <em></em>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="gl1-news-right">
                <div class="gl1-news-two">
                    <h1 class="gl1-news-h gl1-news-h1">
                        <span class="gl1-blue1-title" id="todaytitle3">今日推荐</span>
                    </h1>
                    <ul class="gl1-news-twoul" id="todayNews3">
                        <li>
                            <a data-id="10" href="javascript:;">
                                <span>“浙”就是“最多跑一次”——写在“最多跑一次”改革实施三周年之际</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="7" href="javascript:;">
                                <span>浙江省计量院推进数字交通计量能力建设 守护“智慧出行”</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="9" href="javascript:;">
                                <span>标准化协调推进部际联席会议联络员会议 在京召开</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="8" href="javascript:;">
                                <span>第八届全国合格评定机构认可工作会议召开</span>
                                <em></em>
                            </a>
                        </li>
                        <li>
                            <a data-id="4" href="javascript:;">
                                <span>省计量院机动车测速仪、声级计两个国家型式评价实验室项目高分通过现场评估</span>
                                <em></em>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style>
/* 行业资讯 */
.gl1-news-content {
  width: 1190px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.gl1-news-cont {
  display: flex;
  justify-content: space-between;
}

.gl1-news-left {
  width: 70%;
  padding: 20px;
  float: left;
  background: #fff;
  margin-top: 10px;
  box-sizing: border-box;
}

.gl1-news-one {
  display: flex;
  flex-direction: column;
}

.gl1-news-h {
  font-size: 14px;
  border-bottom: 1px solid #eee;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}

.gl1-blue-title {
  display: inline-block;
  font-size: 18px;
  color: #2291f7;
  border-bottom: 2px solid #2291f7;
  font-weight: bold;
}

.gl1-blue1-title {
  display: inline-block;
  font-size: 18px;
  color: #2291f7;
  font-weight: bold;
}

.gl1-news-ul {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.gl1-news-ul li:hover {
  background-color: #f3f6f8;
}

.gl1-news-ul li:hover a {
  color: #333;
}

.gl1-news-ul .gl1-news-firstli a span {
  font-size: 20px;
  font-weight: bold;
}

.gl1-news-ul li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gl1-news-ul li a span:hover {
  color: #2291f7;
}

.gl1-news-ul li {
  line-height: 40px;
}

.gl1-news-ul li a span {
  float: left;
  font-size: 16px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gl1-news-ul li a em {
  float: right;
  font-size: 12px;
  color: #999;
}

.gl1-news-right {
  width: 28%;
  float: right;
  padding: 10px;
  background: #fff;
  margin-top: 10px;
  box-sizing: border-box;
}

.gl1-news-h1 {
  border: 0;
  line-height: normal;
}

.gl1-news-h1 span {
  color: #333;
  margin: 13px 0;
  border-left: 5px solid #2291f7;
  padding-left: 10px;
}

.gl1-news-two {
  display: flex;
  flex-direction: column;
  background-color: #f7f8f9;
}

.gl1-news-twoul {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.gl1-news-twoul li {
  display: flex;
  align-items: center;
  padding: 5px 0;
  /* background: url(../../images/news_dot.png)no-repeat; */
  background-position: 5px 11px;
  background-size: 7px;
  padding-left: 20px;
}

.gl1-news-twoul li a {
  color: #333;
  font-size: 16px;
  display: block;
  width: 100%;
}

.gl1-news-twoul li a:hover {
  color: #2291f7;
}

.gl11-shqrm_c {
  display: flex;
  flex-direction: column;
}

.gl11-shqrm_c .xiangq_ju {
  box-sizing: border-box;
  width: 96%;
  /* display: flex; */
  /* flex-direction: column; */
  height: auto;
}

.gl11-shqrm_c .xiangq_ju .shenqrxq_bt {
  float: left;
}

.gl11-shqrm_c .xiangq_ju .shenqrxq_bts {
  width: 75%;
}

/* .gl12-shqrm_c .xiangq_ju{
    box-sizing: border-box;
    width:47%;
}

.gl12-shqrm_c .xiangq_ju .shenqrxq_bts{
    width: 58%;
} */
/* 开放实验室 2019-12-5 GL*/
.gl11-lab-cont {
  width: 1190px;
  margin: 10px auto;
}

.gl11-lab-title {
  width: 100%;
  border-bottom: 2px solid #eee;
}

.gl11-lab-title span {
  width: 200px;
  height: 40px;
  display: inline-block;
  /* background: url(/images/lab-title.png)no-repeat center center; */
  background-size: 100% 100%;
  color: #ffff;
}

.gl11-lab-titlei {
  width: 16px;
  height: 30px;
  float: left;
  /* background: url(/images/)no-repeat center center; */
  background-size: 16px 30px;
}

.gl11-lab-bottom {
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
}

.gl11-lab-address {
  display: flex;
  padding: 15px 0;
  align-items: center;
}

.gl11-lab-province {
  position: relative;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.gl11-lab-province span {
  display: inline-block;
  padding: 5px 10px 5px 10px;
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  width: 60px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* min-width: 80px; */
  margin-right: 30px;
}
.gl11-labaddress-i {
  width: 30px;
  height: 30px;
  display: block;
  /* background: url(/images/x_jt.jpg)no-repeat center center; */
  background-size: 10px 5px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.gl11-lab-province ul {
  display: none;
  width: 160px;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  background: #fff;
  border: 1px solid #eee;
  z-index: 10;
}

.gl11-lab-province ul li {
  padding: 2px 10px;
  cursor: pointer;
}

.gl11-lab-province ul li:hover {
  background: #4072b9;
  color: #fff;
}

.gl11-lab-province ul li.active {
  /* background: #4072b9; */
  /* color: #fff; */
}

.gl11-lab-input {
  border: 1px solid #cdcdcd;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  width: 220px;
}

.gl11-lab-search {
  /* margin-left: 30px; */
  color: #fff;
  padding: 5px 25px 5px 40px;
  /* background: url(/images/sou_h.png)no-repeat 15px center; */
  background-color: #4973bb;
  background-size: 15px 15px;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
}

.gl11-lab-list {
  padding: 20px 0;
}

.gl11-lab-li {
  display: flex;
  /* border:1px solid #cdcdcd; */
  box-shadow: 1px 1px 6px #ccc;
  margin-bottom: 30px;
}

.gl11-lab-img {
  width: 160px;
  height: 140px;
  object-fit: cover;
}

.gl11-lab-licont {
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 20px;
  justify-content: space-between;
  width: 950px;
}

.gl11-lab-time {
  position: absolute;
  top: 0;
  left: 0;
}

.gll1-lab-name {
  float: left;
}

.gl11-lab-kefu {
  float: right;
}

.gll1-lab-name h1 {
  font-size: 18px;
  font-weight: bold;
  max-width: 700px;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gll1-lab-name h1 a {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.gll1-lab-name h1 a:hover {
  color: #333;
}

.gll1-lab-name span {
  display: block;
  font-size: 14px;
  margin-top: 10px;
  width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gl11-lab-kefu button {
  padding: 5px 10px;
  font-size: 14px;
  padding-left: 25px;
  cursor: pointer;
}

.gl11-lab-button1 {
  /* background: url(/images/labonline.png)no-repeat 10px center; */
  background-size: 10px 10px;
  border: 1px solid #4973bb;
  background-color: #d7e6ff;
  color: #4973bb;
}

.gl11-lab-button2 {
  /* background: url(/images/labcounsel.png)no-repeat 10px center; */
  background-size: 10px 10px;
  background-color: #4973bb;
  border: 1px solid #4973bb;
  color: #fff;
  margin-left: 20px;
}
</style>
