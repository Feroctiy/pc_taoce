<template>
	<div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
		<div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
			<div class="top_title wddd_xx gl2-wddd_xx">
				<strong>用户认证</strong>
			</div>
		</div>
		<div class="bg-white padding">
			 <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        企业认证
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        个人认证
                    </div>
                </el-col>
            </el-row>
		</div>
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
<style>
.el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
