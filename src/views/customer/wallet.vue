<template>
	<div class="main_width" style="padding:0 10px;box-sizing: border-box;overflow: auto;">
		<div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
			<div class="top_title wddd_xx gl2-wddd_xx">
				<strong>我的钱包</strong>
			</div>
		</div>
		<div class="user_rt_cont gl2-user_rt_cont" >
			 
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>
 
<style scoped>
.gl2-wddd_d {
  padding: 20px;
  height: auto !important;
}

.gl2-wddd_d .gl2-wddd_xx {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.gl2-wddd_xx strong {
  color: #747474;
  font-size: 24px;
}

.gl2-user_rt_cont {
  padding: 10px;
}
.user_rt_cont {
  padding: 18px 28px 0px 28px;
  margin-bottom: 10px;
}
.user_rt_cont {
  overflow: hidden;
  background: white;
  padding: 20px;
}
.top_title strong {
  font-size: 16px;
  color: #020308;
  border-left: 5px solid #006fb3;
  text-indent: 10px;
  display: inline-block;
  text-shadow: 3px 11px 8px rgba(249, 249, 249, 0.6);
}

.ddxz_zt {
  color: #e8393c;
  border-bottom: 2px solid #e8393c;
}
.dd-zt {
  display: inline-block;
  float: left;
  width: 729px;
  margin-top: 6px;
}
.ddzt_xk li {
  float: left;
  height: 22px;
  line-height: 22px;
  margin-right: 43px;
  cursor: pointer;
}
.ddxz_zt {
  color: #e8393c;
  border-bottom: 2px solid #e8393c;
}
.gl2-cartIcons i {
  background: #fe6666;
}
.cartIcons i {
  position: absolute;
  font-style: normal;
  display: inline-block;
  height: 15px;
  line-height: 16px;
  font-family: arial;
  top: -5px;
  padding: 1px 5px;
  background: #ff5722;
  border-radius: 15px;
  color: #fff;
  font-size: 10px;
  left: 41px;
  margin: 0 0 0 2px;
  word-break: normal;
}
.gl2-cartIcons i {
  background: #fe6666;
}
.cartIcons {
  position: relative;
}

.gl2-order_li li:hover {
  border: 1px solid #e4eaee;
}

.gl2-cartIcons li {
  color: #333333;
}

.gl2-order_li li:hover caption {
  background: #f5f8fa;
}

.gl2-order_li li caption strong {
  color: #aaaaaa;
  margin-right: 20px;
}

.gl2-order_li li caption strong em {
  color: #3d3e3e;
}

.gl2-ord_dxq {
  color: #3d3e3e !important;
}

.gl2-ddzt_dzf {
  background: none;
  color: #333;
  font-size: 14px;
}

.gl2-ddzt_zt {
  background: none;
  color: #999;
}
</style>

<style>
.gl2-center img {
    width: 64px;
    height: 64px;
    object-fit: contain;
}
.center img {
    margin-top: 0px;
}
.order_li {
  overflow: hidden;
}

.order_li li {
  border: 1px solid #f1eeee;
  margin-bottom: 22px;
}

.order_li li caption {
  background: #f5f5f5;
  padding: 0 0px 0px 10px;
}

.order_li li caption strong {
  font-size: 14px;
  font-weight: normal;
  color: grey;
}

.order_li li caption a {
  color: #565252;
  font-weight: bold;
}

.order_detail_infor {
  overflow: hidden;
}

.order_detail_infor dt {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px #d2d2d2 solid;
}

.order_detail_infor dd {
  margin: 10px;
  width: 47%;
  float: left;
  line-height: 1.5;
}

.order_detail_infor dd span {
  color: grey;
}

.order_detail_infor dd a {
  background: #6600ff;
  color: white;
  padding: 5px 8px;
  border-radius: 2px;
  font-size: 12px;
  margin: 0 10px;
  cursor: pointer;
}

.favorite_nav {
  width: 100%;
  overflow: hidden;
}

.favorite_nav li {
  float: left;
  width: 50%;
  text-align: center;
  height: 35px;
  line-height: 35px;
  background: #fafafa;
  border-bottom: 1px #d2d2d2 solid;
  cursor: pointer;
}

.favorite_nav li.curr_li {
  border-bottom: 1px #e6e6e6 solid;
  font-weight: bold;
}

.favoriteWrap {
  display: none;
}

.favorite_list {
  overflow: hidden;
  width: 100%;
}

.favorite_list li {
  float: left;
  width: 175px;
  height: 175px;
}
</style>
<style>
.order_table {
  width: 100%;
  table-layout: fixed;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.order_li li caption {
  background: #f5f5f5;
  padding: 0 0px 0px 10px;
}
.order_table caption {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px #eaeaea solid;
}

.gl2-order_li li caption strong {
  color: #aaaaaa;
  margin-right: 20px;
}
.order_li li caption strong {
  font-size: 14px;
  font-weight: normal;
  color: grey;
}
.order_table caption strong {
  float: left;
  font-size: 16px;
}

.order_table caption .shop_name {
  margin: 0 15px;
  font-style: normal;
  float: left;
  font-weight: bold;
  color: #aaa;
}

.order_table caption .shop_name:before {
  content: ".";
  font-family: "151219regular";
  margin-right: 2px;
  font-size: 16px;
  font-weight: normal;
}

.order_table caption a {
  float: right;
  cursor: pointer;
}

.order_table th {
  height: 40px;
  line-height: 40px;
  background: #fafafa;
  text-align: center;
}

.order_table td {
  padding: 8px 0px 8px 0px;
  font-size: 14px;
  text-align: center;
}

.order_table td address {
  font-style: normal;
  line-height: 1.3;
}

.order_table td input {
  display: inline-block;
}

.order_table td .number {
  width: 40px;
  text-align: center;
  height: 25px;
  line-height: 25px;
}

.order_table td .jj_btn {
  width: 30.5px;
  height: 30.5px;
  line-height: 20px;
  margin-right: 5px;
}

.order_table td .a_btn {
  color: #fff;
  border-color: #ffffff;
  margin-left: 7px;
  min-width: 110px;
  height: 36px;
  line-height: 34px;
  font-size: 16px;
  display: inline-block;
}

.gl2-dpth_xx {
    margin: 7px 0 0 10px;
}
.dpth_xx {
    float: left;
    margin: 7px 0 0 128px;
}
.order_table caption a {
    float: right;
    cursor: pointer;
}
.gl2-ord_dxq {
    color: #3d3e3e !important;
}
.ord_dxq {
    height: 30px;
    line-height: 30px;
    color: #796f6f !important;
    padding: 0 6px 0 6px;
    margin-top: 2px;
    font-weight: unset !important;
    font-weight: bold;
}

.order_table td {
    padding: 8px 0px 8px 0px;
    font-size: 14px;
    text-align: center;
}
.gl2-center {
    width: 120px;
}
.ord_gd {
    height: 60px;
}
</style>








<style>
/* 我的订单 */
.order_li {
    overflow: hidden;
}
.dd_wt {
    border-bottom: 1px #eaeaea solid;
}
.order_li li {
    border: 1px solid #f1eeee;
    margin-bottom: 22px;
}
.order_table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
}
.order_li li caption {
    background: #f5f5f5;
    padding: 0 0px 0px 10px;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px #eaeaea solid;
}
.order_li li caption strong {
    font-size: 14px;
    font-weight: normal;
	color: grey;
	color: #aaaaaa;
    margin-right: 20px;
    float: left;
    font-size: 16px;
}

 
.dpth_xx {
	float: left; 
	margin: 0px 0 0 10px;
}
.order_li li caption a {
    color: #565252;
    font-weight: bold;
}
.order_table caption a {
    float: right;
    cursor: pointer;
}
.ord_dd {
    margin-right: 16px;
}
.order_li li caption a {
    color: #565252;
    font-weight: bold;
}
.order_table caption a {
    float: right;
    cursor: pointer;
}
.gl2-logo-liname {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.gl2-ord_dd-userimg {
    background: url(http://zljweb.com/images/gluserimg.png) no-repeat left center;
    background-size: 16px 18px;
    padding-left: 36px;
}
.ord_dd {
    margin-right: 16px;
}
.ord_dxq {
    height: 30px;
    line-height: 30px;
    color: #3d3e3e !important;
    padding: 0 6px 0 6px;
    margin-top: 2px;
    font-weight: unset !important;
    font-weight: bold;
}
.order_table caption a {
    float: right;
    cursor: pointer;
}
.dd_wt {
    border-bottom: 1px #eaeaea solid;
}
.order_table td {
    padding: 8px 0px 8px 0px;
    font-size: 14px;
    text-align: center;
}
.gl2-center {
    width: 120px;
}
.ord_gd {
    height: 60px;
}


.gl2-order_li .gl2-companyname {
    text-align: left;
    padding-left: 15px;
}
.order_table .qymc_dd { 
    padding: 4px;
    line-height: 18px;
}
.order_table td { 
    font-size: 14px;
}
.gl2-companyname {
    width: 300px;
}
.gl2-companyname a {
    display: flex;
    align-items: center;
}
.order_table td {
    padding: 8px 0px 8px 0px;
    font-size: 14px;
    text-align: center;
}
 
.ord_bk_z {
    border-left: 1px #eaeaea solid;
}
.gl2-ord_jg {
    color: #e8393c;
}

.ddzt_dzf {
    color: #3a3737;
    padding: 5px 7px 5px 7px;
    background: #e8e8e8;
    border-radius: 4px;
    font-size: 10px;
    padding: 3px 4px 3px 4px;
    background: #e8e8e8;
    border-radius: 4px;
    font-size: 10px;
}
.gl2-ddzt_dzf {
    background: none;
    color: #333;
    font-size: 14px;
}

.ddzt_zt {
    background: #e8e8e8;
    padding: 5px 7px 5px 7px;
    border-radius: 3px;
    color: #3a3737;
}
.gl2-ddzt_zt {
    background: none;
    color: #999;
    /* padding: 6px 15px; */
}
.gl2-order_table .tj_dd_a .mrxz {
    background: #359be3;
    color: #fff;
    border: 0;
    border-radius: 3px;
	height: auto;
	display: inline-block;
	text-align: center;
	box-sizing: border-box;
    padding: 0 6px;
}
td {
    line-height: 4.4em;
}
</style>



