<template>
  <div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
    <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
			<div class="top_title wddd_xx gl2-wddd_xx">
				<strong>发票簿</strong>
			</div>
		</div>
    <div class="bg-white padding">
      <el-button type="primary" size="small" class="margin-bottom">添加+</el-button>
      <el-table :data="tableData"  style="width: 100%" stripe border>
        <el-table-column label="序号" type="index" align="center" width="80"></el-table-column>
        <el-table-column prop="name" label="发票抬头" align="center"></el-table-column>
        <el-table-column prop="address" label="纳税人识别号" align="center"></el-table-column>
        <el-table-column prop="type" label="发票类型" align="center" width="120"></el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" size="mini" type="info">设为默认</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" size="mini"  type="primary" >修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="margin text-right">
        <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
      </div>
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
      type:"专用发票"
    };
    return {
      tableData: Array(5).fill(item)
    };
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
