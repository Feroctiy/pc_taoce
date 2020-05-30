<template>
  <div class="main_width customer">
    <div class="gl2-wddd_d">
      <div class="top_title">
        <strong>企业列表</strong>
      </div>
    </div>
    <div class="bg-white padding">
      <el-button type="primary" size="small" class="margin-bottom" @click="addOrUpdate">添加认证+</el-button>
      <el-table :data="list" style="width: 100%" stripe border="">
        <el-table-column label="序号" type="index" align="center" width="80"></el-table-column>
        <el-table-column prop="creditCode" label="统一社会信用代码" align="center"></el-table-column>
        <el-table-column prop="dwmc" label="企业名称" align="center"></el-table-column>
        <el-table-column prop="legalPerson" label="法定代表人" align="center" width="120"></el-table-column>
        <el-table-column prop="address" label="审核状态" align="center" width="120">
          <template slot-scope="scope">
            <span v-if="scope.row.status == '1'">审核通过</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              size="mini"
            >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="margin text-right">
				<el-pagination background="" layout="prev, pager, next" :total="1000"></el-pagination>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      status: false
    };
  },
  created() {
    this.handleList();
  },
  methods: {
    // 新增/修改地址
    addOrUpdate() {
      this.$router.push({ path: "/enterprise" });
    },
    // 删除 /api/user/deleteUserConsigneeAddress
    deleteRow(id) {
      var _this = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$fetch("/api/user/deleteUserConsigneeAddress", {
            id: id,
            token: window.localStorage.getItem("paoce_token")
          }).then(response => {
            console.log(response);
            if (response.code == 0) {
              _this.handleList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 企业认证列表
    handleList() {
      var _this = this;
      this.$fetch("/api/user/userAuthenticationList", { type: "2" }).then(
        response => {
          if (response.code == 0) {
            _this.list = response.data;
          } else {
            this.$message.error(response.message);
          }
        }
      );
    }
  }
};
</script>
<style>
@import "../../../style/customer.css";
</style>