<template>
    <div class="main_width" style="padding:0 10px;box-sizing: border-box;overflow: auto;">
        <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
            <div class="top_title wddd_xx gl2-wddd_xx">
                <strong>欢迎</strong>
            </div>
        </div>
        <div class="user_factbook">
            <div class="user_icon">
                <img src="http://zljweb.com/images/DefaultAvatar.jpg" alt="">
            </div>
            <div class="user_infor">
                <div class="user_infor_item">{{userInfo.username}}</div>
                <div class="user_infor_item">上次登录时间： 2020-03-24 14:56:21</div>
            </div>
        </div>
        <div>
            <dl class="user_order_tips">
                <dt>订单提醒</dt>
                <dd>
                    <router-link :to="{ path:'/order', query: {type:'1'}}">
                        <strong class="orderCount">{{orderNum.dsysl}}</strong>
                        <em>待送样订单</em>
                    </router-link>
                </dd>
                <dd>
                    <router-link :to="{ path:'/order', query: {type:'2'}}">
                        <strong class="orderCount">{{orderNum.dfksl}}</strong>
                        <em>待付款订单</em>
                    </router-link>
                </dd>
                <dd>
                    <router-link :to="{ path:'/order', query: {type:'4'}}">
                        <strong class="orderCount">{{orderNum.dqssl}}</strong>
                        <em>待签收订单</em>
                    </router-link>
                </dd>
                <dd>
                    <router-link :to="{ path:'/order', query: {type:'5'}}">
                        <strong class="orderCount">{{orderNum.dpjsl}}</strong>
                        <em>待评价订单</em>
                    </router-link>
                </dd>
            </dl>
        </div>
    </div>
</template>
		 
<script>
export default {
  data() {
    return {
      userInfo: {},
      orderNum: {}
    };
  },
  created() {
    this.getOrderNum();
    this.getUserInfo();
  },
  methods: {
    // 获取用户信息
    getUserInfo() {
      var _this = this;
      this.$fetch("/api/user/userInfo").then(response => {
        if (response.code == 0) {
          _this.userInfo = response.data;
        }
      });
    },
    // 获取订单数量
    getOrderNum() {
      var _this = this;
      this.$fetch("/api/order/statisticsUserOrder").then(response => {
        if (response.code == 0) {
          _this.orderNum = response.data;
        }
      });
    }
  }
};
</script>

<style>
.user_factbook {
  margin-top: 15px;
  overflow: hidden;
  background: #fff;
  padding: 15px;
}
.user_factbook .user_icon {
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1px #d2d2d2 solid;
  text-align: center;
  overflow: hidden;
  float: left;
  position: relative;
}
.user_factbook .user_icon img {
  width: auto;
  max-width: 100%;
  height: 80px;
}
.user_factbook .user_infor {
  margin-left: 100px;
  overflow: hidden;
}
.user_factbook .user_infor .user_infor_item {
  line-height: 15px;
  margin-top: 10px;
  font-size: 15px;
}
.user_order_tips {
  overflow: hidden;
  margin: 15px 0;
  box-shadow: 0 1px 3px 0 rgba(76, 77, 78, 0.302),
    0 4px 8px 3px rgba(216, 216, 216, 0.149);
  background-color: #fafafb;
}
.user_order_tips dt {
  height: 40px;
  line-height: 40px;
  background: #fafafa;
  border-bottom: 1px #d2d2d2 solid;
  font-weight: bold;
  padding: 0 15px;
}
.user_order_tips dd {
  width: 24.8%;
  overflow: hidden;
  float: left;
  text-align: center;
  border-right: 1px #ffc7b2 dotted;
  margin: 0;
  padding: 28px 0;
}
.user_order_tips dd strong {
  font-size: 20px;
  color: #f37b55;
}
.user_order_tips dd em {
  font-style: normal;
  margin-top: 8px;
}
.user_order_tips dd strong,
.user_order_tips dd em {
  display: block;
}
</style>
