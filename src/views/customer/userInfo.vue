<template>
	<div class="main_width customer" style="padding:0 10px;box-sizing: border-box;overflow: auto;">
		<div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
			<div class="top_title wddd_xx gl2-wddd_xx">
				<strong>用户信息</strong>
			</div>
		</div>
		<div class="user_rt_cont gl2-user_rt_cont bg-white padding-top padding-bottom">
			<el-form ref="form" :model="form" label-width="80px" style="width:400px">
				<el-form-item label="登录账户">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="手机号码">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<div class="bg-white padding">
			<template>
				<el-table :data="tableData" border="" style="width: 100%">
					<el-table-column prop="date" label="统一社会信用代码" width="180"></el-table-column>
					<el-table-column prop="name" label="企业名称" width="180"></el-table-column>
					<el-table-column prop="address" label="法定代表人"></el-table-column>
					<el-table-column prop="address" label="操作"></el-table-column>
				</el-table>
			</template>
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
      tableData: Array(4).fill(item),
      form: {}
    };
  }
};
</script>
<style>
@import "../../style/customer.css";
</style>
<style>
.el-header {
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu {
  height: 100%;
}
</style>
