<template>
    <div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
        <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
        <div class="top_title wddd_xx gl2-wddd_xx">
            <strong>我的关注</strong>
        </div>
        </div>
        <div class="bg-white padding"> 
        </div>
    </div>
</template>
<script>
import addOrUpdateInvoice from "../template/add-or-update-invoice";
export default {
  components: { addOrUpdateInvoice },
  data() {
    return {
      list: [],
      status: false,
      listLoading:true
    };
  },
  created() {
	  this.handleList();
  },
  methods: {
    // 新增/修改地址
    addOrUpdate(item) {
      this.status = true;
      this.$nextTick(() => { this.$refs.invoic.init(item); });
    },
    // 删除 /api/user/deleteUserConsigneeAddress
    deleteRow(id) {
      var _this = this;
      this.$confirm("此操作将永久删除该发票信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$fetch("/api/user/deleteUserInvoiceInfo", { id: id}).then(response => { 
            if (response.code == 0) {
              _this.handleList();
            }
          });
        })
        .catch(() => { });
    },
    handDefault(id){
      var _this = this;
      this.$confirm("是否将该发票设为默认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$fetch("/api/user/defaultUserInvoiceInfo", { id: id}).then(response => { 
            if (response.code == 0) {
              _this.handleList();
            }
          });
        })
        .catch(() => { });
    },
    handleList() {
      var _this = this;
      this.$fetch("/api/user/userInvoiceInfoList").then(response => { 
        _this.listLoading = false;
        if (response.code == 0) {
          _this.list = response.data;
        }
      });
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
