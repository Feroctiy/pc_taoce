<template>
	<div class="main_goods_detail page-component__scroll el-scrollbar">
		<el-backtop></el-backtop>
		<div class="global_header love_0210">
			<div class="header_wrap fix_header">
				<section class="header_content main_width clear_fix">
					<a href="/" target="_parent" class="logo_img">
						<img src="@/assets/log.png" alt="" width="100px" class="f_left">
					</a>
					<div class="global_nav">
						<el-menu
							:default-active="activeIndex"
							class="el-menu-demo nav"
							mode="horizontal"
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
		<div class="main main_width">
			<div class="goods_img">
				<img
					src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201812/13164/display_13164_61232.jpg"
					data-digital=""
				>
			</div>
			<section class="goods_detail clear_fix">
				<el-row>
					<el-col :span="12" class="padding">
						<div class="grid-content bg-purple">
							<div class="grid-content bg-purple-light">
								<el-row type="flex" class="row-bg" justify="space-between">
									<el-col :span="12">
										<div class="grid-content bg-purple">
											<h1>雪域牛乳芝士·特浓</h1>
											<div>鲜乳芝士蛋糕</div>
										</div>
									</el-col>
									<el-col :span="12">
										<div class="grid-content bg-purple-light">
											<h1>44444</h1>
										</div>
									</el-col>
								</el-row>
							</div>
						</div>
					</el-col>
					<el-col :span="12" class="padding">
						<div style="line-height:40px;">建议食物人数</div>
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
							<el-tab-pane label="2-4人食" name="first">
								<el-row :gutter="20">
									<el-col :span="6">
										<div class="grid-content bg-purple">含10套餐具</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约 20 x 20 x 3 cm</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约910g</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">甜度：</div>
									</el-col>
								</el-row>
							</el-tab-pane>
							<el-tab-pane label="5-8人食" name="second">
								<el-row :gutter="20">
									<el-col :span="6">
										<div class="grid-content bg-purple">含10套餐具</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约 20 x 20 x 3 cm</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约910g</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">甜度：</div>
									</el-col>
								</el-row>
							</el-tab-pane>
							<el-tab-pane label="10-12人食" name="third">
								<el-row :gutter="20">
									<el-col :span="6">
										<div class="grid-content bg-purple">含10套餐具</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约 20 x 20 x 3 cm</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约910g</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">甜度：</div>
									</el-col>
								</el-row>
							</el-tab-pane>
							<el-tab-pane label="15-20人食" name="fourth">
								<el-row :gutter="20">
									<el-col :span="6">
										<div class="grid-content bg-purple">含10套餐具</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约 20 x 20 x 3 cm</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">约910g</div>
									</el-col>
									<el-col :span="6">
										<div class="grid-content bg-purple">甜度：</div>
									</el-col>
								</el-row>
							</el-tab-pane>
						</el-tabs>
						<el-divider></el-divider>
						<el-row style="margin-top: 20px;">
							<el-col :span="12">
								<el-button style="width:95%">加入购物车</el-button>
							</el-col>
							<el-col :span="12" style="text-align: right;">
								<el-button style="width:95%" @click="buy">立即购买</el-button>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</section>
			<section class="goods_images">
				<div class="img" style="background: #f9f9f9">
					<img
						src="http://www.lecake.com/postsystem/docroot/images/promotion/201912/雪域牛乳芝士pc(4).jpg"
						alt=""
					>
				</div>
				<div class="img" style="background: #f9f9f9">
					<img
						src="http://www.lecake.com/postsystem/docroot/images/promotion/201903/雪域商详_02(1).jpg"
						alt=""
					>
				</div>
				<div class="img" style="background: #f9f9f9">
					<img src="http://www.lecake.com/postsystem/docroot/images/promotion/201912/pc_01.jpg" alt="">
				</div>
				<div class="img" style="background: #f9f9f9">
					<img
						src="http://www.lecake.com/postsystem/docroot/images/promotion/201909/pc_02(1).gif"
						alt=""
					>
				</div>
			</section>
		</div>
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
      activeIndex2: "1",
      activeName: "first"
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
    buy() {
      this.$router.push({
        path: "/cart"
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.el-divider--horizontal {
  margin: 0;
}

.padding {
  padding: 30px 20px 30px 30px;
}

.el-tabs__item.is-active {
  color: #ff4001;
}

.el-tabs__item:hover {
  color: #ff4001;
  cursor: pointer;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  width: 1200px;
  margin: auto;
}

.el-col {
  border-radius: 4px;
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
