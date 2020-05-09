<template>
    <div class="content main_width">
        <!-- <el-row :gutter="10" style="margin-top:10px">
            <el-col :span="4" v-for="(item, index)  in tableData" :key="index" @click="goDetail()">
                <div class="grid-content bg-white">
                    <img :src="item.img" alt="">
                    <div class="name">{{item.name}}</div>
                </div>
            </el-col>
        </el-row> -->
        <!-- <div class="block " style="text-align:center;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            ></el-pagination>
        </div> -->

        <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/11.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">上海纺织集团检测</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/22.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">重庆市计量质量检测研究院</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/33.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">广州检验检测认证集团</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/44.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">谱尼测试集团股份有限公司</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/55.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">深圳市计量质量检测研究院</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/66.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">中纺标检验认证股份有限公司</div>
          </div>
        </el-col>
         <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/22.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">重庆市计量质量检测研究院</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/33.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">广州检验检测认证集团</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/44.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">谱尼测试集团股份有限公司</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/55.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">深圳市计量质量检测研究院</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content text-center" style="padding-top:10px;">
            <img src="@/assets/66.jpg" alt="" style="width:200px;height:100px;margin:auto;">
            <div class="text-center text-df" style="line-height:50px">中纺标检验认证股份有限公司</div>
          </div>
        </el-col>
         
         
        
        
        
      </el-row>
    </div>
</template>
<script>
export default {
  data() {
    const item = {
      img: "@/static/img/11.jpg",
      name: "王小虎"
    };
    return {
      tableData: Array(10).fill(item),
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
