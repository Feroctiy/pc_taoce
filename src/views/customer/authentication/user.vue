<template>
    <div class="main_width" style="padding-left:10px;box-sizing: border-box;overflow: auto;">
        <div class="user_rt_cont gl2-user_rt_cont wddd_d gl2-wddd_d">
			<div class="top_title wddd_xx gl2-wddd_xx">
				<strong>用户认证</strong>
			</div>
		</div>
        <div class="bg-white"> 
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width:500px">
                <el-form-item label="真实姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="region">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item> 
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">返回</el-button>
                    <el-button @click="resetForm('ruleForm')">
                        返回
                    </el-button>
                </el-form-item>
            </el-form>
        </div>

    
    
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
