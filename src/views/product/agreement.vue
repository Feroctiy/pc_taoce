<template>
  <div class="main_width stepBox" id="step"> 
      <el-card class="box-card margin-bottom">
        <div slot="header" class="clearfix"> <span class="tit">{{data.title}}</span> </div>
        <div v-html="data.content"></div>
      </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data:{}
    };
  },
  mounted() {},
  created() {
    console.log("呼呼呼呼呼",this.$route.query.id);
     this.getInfo(this.$route.query.id);
  },
  methods: { 
    getInfo(id){
      this.$post("/api/single-page/info?id=" + id, {}).then(response => {
        console.log(response);
        if (response.code == 0) {
          this.data = response.data
        }
      });

    }
  }
};
</script>
<style>
@import "../../style/step.css";
</style>

 