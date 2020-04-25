<template>
  <div class="index page-component__scroll el-scrollbar">
    <el-backtop></el-backtop>
    <div class="global_header love_0210">
      <div class="header_wrap fix_header">
        <section class="header_content main_width clear_fix">
          <a href="/" target="_parent" class="logo_img">
            <img src="http://newimgcdn.lapetit.cn/web/images/logo.png" class="f_left">
          </a>
          <div class="global_nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="3">蛋糕</el-menu-item>
              <el-menu-item index="2">甜点心礼</el-menu-item>
              <el-menu-item index="4">个人中心</el-menu-item>
            </el-menu>
          </div>
        </section>
      </div>
    </div>
    <div class="header"></div>
    <!-- 轮播图 -->
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://imagecdn.lapetit.cn/postsystem/docroot/images/promotion/202003/4E18431D158EC0A47EB73EB683521D10.jpg"
          >
        </div>
        <div class="swiper-slide">
          <img
            src="https://imagecdn.lapetit.cn/postsystem/docroot/images/promotion/202003/59D9B0DF9D81595AADB1B23BF06E4FDE.jpg"
            alt=""
          >
        </div>
        <div class="swiper-slide">
          <img
            src="https://imagecdn.lapetit.cn/postsystem/docroot/images/promotion/202003/7C8F4924673A9236B087E5353A856F86.jpg"
            alt=""
          >
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="section_aha">
      <div class="inner"></div>
    </div>
    <!-- 商品列表 -->
    <div class="list">
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="(item,index) in goodList"
          v-bind:key="index"
          class="common_list_item"
        >
          <div class="grid-content bg-purple item_detail">
            <el-image :key="item.url" :src="item.url" lazy></el-image>
            <div class="item_name">{{item.name}}</div>
            <div class="recommend_reason">{{item.des}}</div>
            <div class="price_wrap">
              <p class="new_price">
                <small>¥</small>
                {{item.price}}
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 最新评论 -->
    <section class="comment_section">
      <h2>
        <span>最新评论</span>
      </h2>
    </section>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "HelloWorld",
  data() {
    return {
      goodList: [
        {
          url:
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201301/10923/list_10923.jpg?v=1571369695",
          name: "巧克力松露",
          des: "巧克力爱好者的福音",
          price: "128"
        },
        {
          url:
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201908/22426/list_22426.jpg?v=1576572127",
          name: "果然倾心",
          des: "迷上缤纷果香的滋味",
          price: "218"
        },
        {
          url:
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201508/13664/list_13664.jpg?v=1571371865",
          name: "公主",
          des: "少女心爆棚 甜美公主必选",
          price: "218"
        },
        {
          url:
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201908/22426/list_22426.jpg?v=1576572127",
          name: "果然倾心",
          des: "迷上缤纷果香的滋味",
          price: "218"
        },
        {
          url:
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201508/13664/list_13664.jpg?v=1571371865",
          name: "公主",
          des: "少女心爆棚 甜美公主必选",
          price: "218"
        }
      ],
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  width: 1200px;
  margin: auto;
}

.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
img {
  max-width: 100%;
  vertical-align: top;
}
.global_header {
  height: 90px;
  background: transparent;
  position: relative;
  z-index: 20;
}
.global_header * {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.global_header a:hover {
  color: #ff4001;
}
.global_header .header_wrap {
  z-index: 10;
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
  -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
}
.global_header .header_wrap.fix_header {
  position: fixed;
  min-width: 1200px;
}
.global_header .header_wrap button {
  background: transparent;
}
.global_header .header_wrap .header_content {
  background: #ffffff;
  padding-top: 32px;
}
.global_header .header_wrap .header_content .logo_img {
  float: left;
  width: 200px;
  height: 23px;
}
.global_header .header_wrap .header_content .global_nav {
  float: left;
  position: relative;
  text-align: center;
  margin-left: 20px;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  opacity: 1;
}
.global_header .header_wrap .header_content .global_nav .nav {
  text-align: center;
}
.global_header .header_wrap .header_content .global_nav .nav li {
  position: relative;
  font-size: 16px;
  color: #000;
  padding: 0 20px;
  height: 24px;
  line-height: 24px;
  float: left;
}
.global_header .header_wrap .header_content .global_nav .nav li.active > a {
  color: #ff4001;
}
.global_header
  .header_wrap
  .header_content
  .global_nav
  .nav
  li.have_inner:before {
  display: none;
  position: absolute;
  width: 100%;
  height: 24px;
  content: "";
  left: 0;
  bottom: -24px;
  background: #ffffff;
  z-index: 3;
}
.global_header
  .header_wrap
  .header_content
  .global_nav
  .nav
  li.have_inner:hover:before {
  display: block;
}
.global_header
  .header_wrap
  .header_content
  .global_nav
  .nav
  li.have_inner:hover
  .inner_wrap {
  font-size: 16px;
  display: block;
}
.el-menu.el-menu--horizontal{
  border-bottom:none;
}
.global_header .header_wrap .header_content .global_nav .nav li.el-menu-item.is-active{
  border-bottom-color: transparent;
  color: #ff4001;
}
.list {
  background: #fff;
  padding: 20px;
}
.common_list_item {
  font-size: 14px;
  padding-top: 10px;
}
.common_list_item:hover {
  background: #ffecec;
}
.common_list_item .item_detail {
  text-align: center;
}
.common_list_item .item_detail .item_name {
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}
.common_list_item .item_detail .recommend_reason {
  color: #949494;
}
.common_list_item .item_detail .price_wrap {
  font-size: 16px;
  position: relative;
}
.common_list_item .item_detail .price_wrap .new_price {
  color: #cea461;
}

.common_list_item .item_detail .price_wrap p {
  display: inline-block;
  margin-right: 4px;
  vertical-align: middle;
}
.common_list_item .item_detail .price_wrap p small {
  font-size: inherit;
  margin-right: 2px;
}
.section_aha {
  height: 190px;
  position: relative;
  /* background: url(../images/home/ahaPanelBg.jpg?03) no-repeat center; */
  margin: 20px 0;
}

.comment_section {
  width: 1120px;
  margin: auto;
  position: relative;
  padding: 0 40px;
  padding-bottom: 20px;
}
.comment_section h2 {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 15px 0 20px;
}
.comment_section h2 span {
  display: inline-block;
  position: relative;
  padding: 0 20px;
}
.comment_section h2 span::before {
  content: "-";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
.comment_section h2 span::after {
  content: "-";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
</style>
<style>
.banner .swiper-pagination {
  top: 90%;
  bottom: none;
  width: 1160px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  padding-right: 40px;
  text-align: right;
}

.banner .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 4px;
  background: #ffffff;
  opacity: 1;
  filter: alpha(opacity=100);
}
.banner .swiper-pagination .swiper-pagination-bullet-active {
  background: #e8380d;
}
</style>
