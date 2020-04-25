<template>
	<div class="main_width">
		<el-container style="height: 100vh; border: 1px solid #eee">
			<el-aside width="200px">
				<el-menu :default-openeds="['1', '2']" unique-opened router>
					<el-submenu index="1">
						<template slot="title">订单管理</template>
						<el-menu-item index="/order">订单管理</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">资金管理</template>
						<el-menu-item index="2-1">我的钱包</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">设置</template>
						<el-menu-item index="2-1">用户信息</el-menu-item>
						<el-menu-item index="2-1">用户信息</el-menu-item>
						<el-menu-item index="2-1">用户信息</el-menu-item>
						<el-menu-item index="2-1">用户信息</el-menu-item>
						<el-menu-item index="2-1">用户信息</el-menu-item>
						<el-menu-item index="2-1">用户信息</el-menu-item>
						<el-menu-item index="2-1">用户信息</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</el-container>
		</el-container>

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
