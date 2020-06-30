<template>
  <div class="main_width customer">
    <el-tabs type="border-card">
      <el-tab-pane label="账户明细">
        <div class="gl2-wddd_d">
          <div class="top_title">
            <strong>账户明细</strong>
          </div>
        </div>
        <div class="block"> 
          <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <el-button type="primary" style="margin-left:20px;">查询</el-button>
        </div>
        <div class="padding-top padding-bottom" style="font-size:16px;">
          <span class="padding-right">消费总金额：100.00元</span>
          <span>充值总金额：200.00元</span>
        </div>
        <el-table :data="tableData" border="" style="width: 100%">
          <el-table-column prop="date" label="账号"></el-table-column>
          <el-table-column prop="name" label="消费类型"></el-table-column>
          <el-table-column prop="address" label="账单流水"></el-table-column>
          <el-table-column prop="address" label="价格"></el-table-column>
          <el-table-column prop="address" label="应付金额"></el-table-column>
          <el-table-column prop="address" label="现金支付"></el-table-column>
          <el-table-column prop="address" label="创建时间"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="消费明细">
        <div class="gl2-wddd_d">
          <div class="top_title">
            <strong>消费明细</strong>
          </div>
        </div>
        <div class="block"> 
          <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <el-button type="primary" style="margin-left:20px;">查询</el-button>
        </div>
        <div class="padding-top padding-bottom" style="font-size:16px;">
          <span class="padding-right">消费总金额：100.00元</span> 
        </div>
        <el-table :data="tableData" border="" style="width: 100%">
          <el-table-column prop="date" label="订单编号"></el-table-column>
          <el-table-column prop="name" label="认证类型"></el-table-column>
          <el-table-column prop="address" label="账单流水"></el-table-column>
          <el-table-column prop="address" label="订单价格"></el-table-column>
          <el-table-column prop="address" label="联系人"></el-table-column>
          <el-table-column prop="address" label="联系号码"></el-table-column>
          <el-table-column prop="address" label="样品名称"></el-table-column>
          <el-table-column prop="address" label="规格型号"></el-table-column>
          <el-table-column prop="address" label="创建时间"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市",
      type: "专用发票"
    };
    return {
      tableData: Array(5).fill(item),
      value1:""
    };
  }
};
</script>
<style>
@import "../../style/customer.css";
</style>