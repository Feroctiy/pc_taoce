<template>
    <div class="content main_width">
        <el-row :gutter="10" style="margin-top:10px">
            <el-col :span="4" v-for="(item, index)  in tableData" :key="index" @click="goDetail()">
                <div class="grid-content bg-white">
                    <img :src="item.img" alt="">
                    <div class="name">{{item.name}}</div>
                </div>
            </el-col>
        </el-row>
        <div class="block " style="text-align:center;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            ></el-pagination>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    const item = {
      img: "http://wj.zljweb.com/zljfiles/BasicImages/nzfz.jpg",
      name: "王小虎"
    };
    return {
      tableData: Array(24).fill(item),
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    goDetail(){
        alert(1);
        this.$router.push({ path:'/potal'  })
    }
  }
};
</script>

<style>
.el-row {
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
}
</style>
