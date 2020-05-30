<template>
    <div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
        <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
            <div class="top_title wddd_xx gl2-wddd_xx">
                <strong>反馈意见</strong>
            </div>
        </div>
        <div class="bg-white padding">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="反馈意见">
                    <el-input type="textarea" v-model="form.content" placeholder="请输入反馈意见" maxlength="500" show-word-limit :autosize="{ minRows: 5, maxRows: 10}"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button> 
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { isEmpty } from "@/utils";
export default {
  data() {
    return {
      form:{}
    };
  },
  created() {
  },
  methods: {
    onSubmit() {
      var _this = this;
      if (isEmpty(_this.form.content)) {
        this.$message.error("请输入反馈意见");
        return;
      }
      this.$put("/api/user/feedback", {
            content: _this.form.content
        }).then(response => {
            console.log(response);
            if (response.code == 0) {
              this.$message.success("反馈意见已提交成功");
              _this.form.content = "";
            }else{
              this.$message.error(response.msg);
            }
        })
    }
  }
};
</script>