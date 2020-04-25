<template>
	<div class="main_width" style="padding:0 10px;box-sizing: border-box;overflow: auto;">
		<div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
			<div class="top_title wddd_xx gl2-wddd_xx">
				<strong>用户信息</strong>
			</div>
		</div>
		<div class="user_rt_cont gl2-user_rt_cont" >
			 
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		}
	};
</script>

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
