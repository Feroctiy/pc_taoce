<template>
  <div class="main_width customer">
    <div class="gl2-wddd_d">
      <div class="top_title">
        <strong>我的消息</strong>
      </div> 
    </div>
    <div class="bg-white padding" v-loading="loading">
      <el-collapse accordion>
        <el-collapse-item v-for="(item, index)  in list" :key="index" :name="index">
          <template slot="title"> 
            <div class="flex justify-between text-df" style="width: 100%;">
              <div>2020-02-16 一致性 Consistency</div>
              <div>消息类型</div> 
            </div>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </el-collapse-item> 
      </el-collapse>
    </div>
    <div class="block" style="text-align:right;margin-top:30px;margin-bottom:30px;">
      <el-pagination hide-on-single-page  :page-size="pageSize" background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { 
      list:[], 
      loading:true,
      currentPage: 1,
      pageSize: 20,
      total:0
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      var _this = this;
      this.$fetch("/api/news/list", { limit: _this.pageSize, page: _this.currentPage }).then(response => {
        _this.loading = false;
        if (response.code == 0) {
          _this.list = response.data.records;
          _this.total = response.data.total;
        } else {
          _this.$message.error(response.msg);
        }
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    }
  }
};
</script>
<style>
@import "../../style/customer.css";
</style>