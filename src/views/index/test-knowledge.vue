<template>
    <div class="container main_home max_width main main_width padding" style="margin-top:15px;">
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in list" :key="index" >
                <div @click="goDetail(index)">
                    <div class="img">
                        <img :src="item.img" alt="" height="200px">
                    </div>
                    <div class="name">{{item.title}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { title: "手套检测", time: "",img:require('@/assets/test/3.png') },
        { title: "微生物检测", time: "",img:require('@/assets/test/4.png') },
        { title: "无纺布检测", time: "" ,img:require('@/assets/test/2.png')},
        { title: "医用护目镜检测标准汇总", time: "",img:require('@/assets/test/6.png') },
        { title: "阻燃性检测", time: "",img:require('@/assets/test/5.png') },
        // { title: "医用护目镜检测标准汇总", time: "",img:require('@/assets/test/2.png') }
      ]
    };
  },
  methods: {
    goDetail(type) {
      this.$router.push({
        path: "/test-knowledge-detail",
        query: { type: type }
      });
    }
  }
};
</script>
<style scoped>
.name {
  height: 48px;
  margin: 15px 10px 5px 15px;
  overflow: hidden;
  line-height: 24px;
  font-size: 16px;
  color: #000;
}
.time {
  font-size: 13px;
  height: 14px;
  margin: 15px 15px;
  margin-top: 0;
}
</style>


 