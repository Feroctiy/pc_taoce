<template>
  <div class="content main_width">
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, index)  in list" :key="index">
        <div class="grid-content text-center" style="padding-top:10px;" @click="goDetail(item.id)">
          <img :src="item.logo" alt="" style="width:200px;height:100px;margin:auto;">
          <div class="text-center text-sm" style="margin:10px 0">{{item.mc}}</div>
        </div>
      </el-col>
    </el-row>
    <div class="block" style="text-align:right;margin-top:30px;margin-bottom:30px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[30, 40, 50, 60]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 30,
      total:0,
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取机构列表 /api/user/agencyList
    getList() {
      var _this = this;
      this.$fetch("/api/user/agencyList", {
        limit: _this.pageSize,
        page: _this.currentPage
      }).then(response => {
        console.log(response);
        if (response.code == 0) {
          _this.list = response.data.records;
          _this.total = response.data.total;
        }
      });
    },
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
    goDetail(id) {
      this.$router.push({ path: "/server", query: { id: id}});
    }
  }
};
</script>

<style>
/* .el-row {
  margin-bottom: 10px;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.name {
  font-size: 16px;
  line-height: 32px;
  text-align: center;
} */
</style>
