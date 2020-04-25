<template>
	<div class="main_width" style="padding:0 20px;box-sizing: border-box;overflow: auto;">
        <div>
            用户名
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
