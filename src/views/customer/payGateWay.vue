<template>
    <div class="main_width" style="padding:0 10px;box-sizing: border-box;overflow: auto;">
        <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
            <div class="top_title wddd_xx gl2-wddd_xx">
                <strong>支付宝支付</strong>
            </div>
        </div>
        <div v-html="payGateWay">{{payGateWay}}</div>
    </div>
</template>
<script>
export default {
  name: "payGateWay",
  data() {
    return {
      payGateWay: ""
    };
  },
  mounted() {
    let form = this.$route.query.htmlData;
    this.payGateWay = form;
    this.$nextTick(() => {
      document.forms[0].submit();
    });
  }
};
</script>
  