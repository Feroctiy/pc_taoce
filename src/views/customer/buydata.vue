<template>
	<div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: hidden;">
		<el-tabs type="border-card">
			<el-tab-pane>
				<span slot="label">
					<i class="el-icon-date"></i>账户明细
				</span>
				账户明细
			</el-tab-pane>
			<el-tab-pane label="消费明细">消费明细</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      type: "专用发票"
    };
    return {
      tableData: Array(5).fill(item)
    };
  }
};
</script>