<template>
    <div class="main_width customer" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
        <div class="gl2-wddd_d"><div class="top_title"><strong>收藏夹</strong></div></div>
        <div class="bg-white padding">
            <el-tabs type="border-card">
                <el-tab-pane  label="全部检测项目"> 
                    <el-row :gutter="10" style="padding:10px">
                        <el-col :span="5" v-for="(item,index) in list" :key="index">
                            <div class="text-center" @click="goDetail(item.goods_id,item.shopid)">
                                <div style="overflow: hidden;">
                                    <img :src="item.goodsImg" alt="" style="width:100%;height:120px;margin:auto;" class="goods-item-img">
                                </div>
                                <div class="text-lg" style="color:red">¥{{item.goodsPrice}}</div>
                                <div class="text-df">{{item.goodsName}}</div>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="text-center" v-if="list.length == 0">暂无数据</div>
                </el-tab-pane>
                <el-tab-pane label="全部店铺">
                    <div class="text-center" v-if="list1.length == 0">暂无数据</div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 新增或者编辑地址 -->
        <add-address v-if="status" ref="addaddress"/>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      list1: [],
      status: false
    };
  },
  created() {
    this.handleList();
    this.handleList1();
  },
  methods: {  
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
    handleList() {
      var _this = this;
      this.$fetch("/api/user/userCollectionGoodsList", {
        limit: "10",
        page: "1"
      }).then(response => {
        console.log(response);
        if (response.code == 0) {
          _this.list = response.data.records;
        }
      });
    },
    handleList1() {
      var _this = this;
      this.$fetch("/api/user/userCollectionShopList", {
        limit: "10",
        page: "1"
      }).then(response => {
        console.log(response);
        if (response.code == 0) {
          _this.list1 = response.data.records;
        }
      });
    }
  }
};
</script>
<style>
@import "../../style/customer.css";
</style>
