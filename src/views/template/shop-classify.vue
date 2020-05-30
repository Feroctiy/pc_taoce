 
<template>
    <el-dialog :visible.sync="visible" title="请选择产品类别">
        <div class="filter">
            <!-- 一级分类 -->
            <el-row :gutter="20">
                <el-col :span="21" class="filter-select">
                    <div>
                        <el-link
                            v-for="item in categoryList"
                            :underline="false"
                            :key="item.cat_one"
                            :class="param.cateOne == item.cat_one ? 'on':''"
                            @click="getCategory(item.cat_one)"
                        >{{item.cat_one_name}}</el-link>
                    </div>
                </el-col>
            </el-row>
            <!-- 二级分类 -->
            <el-row :gutter="20" class="margin-top">
                <el-col :span="21" class="filter-select">
                    <el-card shadow="never">
                        <el-link
                            :class=" param.cateTwo == '' ? 'on':''"
                            @click="getCategoryTwo('')"
                        >全部</el-link>
                        <el-link
                            v-for="item in categoryListTwo"
                            :underline="false"
                            :key="item.cate_two"
                            :class="param.cateTwo == item.cate_two ? 'on':''"
                            @click="getCategoryTwo(item.cate_two)"
                        >{{item.cate_two_name}}</el-link>
                    </el-card>
                </el-col>
            </el-row>
            <!-- 三级分类 -->
            <el-row :gutter="20" class="margin-top">
                <el-col :span="21" class="filter-select">
                    <el-card shadow="never">
                        <el-link
                            :class="param.cateThree == '' ? 'on':''"
                            @click="getCategoryThree('')"
                        >全部</el-link>
                        <el-link
                            :underline="false"
                            v-for="item in categoryListThree"
                            :key="item.cate_three"
                            :class="param.cateThree == item.cate_three ? 'on':''"
                            @click="getCategoryThree(item.cate_three,item.cate_three_name)"
                        >{{item.cate_three_name}}</el-link>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handle">确认</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: [],
      visible: true,
      categoryList: [],
      categoryListTwo: [],
      categoryListThree: [],
      param: {
        cateOne: "",
        cateTwo: "",
        cateThree: ""
      },

      isLoading: false,
      dataList: [],
      form: {},
      formLabelWidth: "120px",
      options: []
    };
  },
  created() {
    var _this = this;
    this.$fetch("/api/category/oms/shopCategoryList", {
      shopId: "4028b88171af205f0171b16a5bde003b"
    }).then(response => {
      console.log(response.data);
      if (response.code == 0) {
        _this.categoryList = response.data;
        _this.param.cateOne = response.data[0].cat_one;
        _this.categoryListTwo = response.data[0].twolist;
        _this.param.cateTwo = response.data[0].twolist[0].cate_two;
        _this.getCategory();
      }
    });
  },
  methods: {
    getCategory() {
      var _this = this;
      this.$fetch("/api/category/oms/shopCategoryThreeListDown", {
        shopId: "4028b88171af205f0171b16a5bde003b",
        cateTwo: _this.param.cateTwo
      }).then(response => {
        if (response.code == 0) {
          _this.categoryListThree = response.data;
          _this.param.cateThree = response.data[0].cate_three;
        }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    init(item) {
      this.visible = true;
      this.$nextTick(() => {});
    },
    onSelected(data) {
      this.form.province = data.province.value;
      this.form.city = data.city.value;
      this.form.district = data.area.value;
    },
    handle() {
        console.log(this.param)

      this.visible = false;
      this.$emit('getClass',this.param);
    }
  }
};
</script>
<style scoped>
#addOrUpdateAddr .el-input,
#addOrUpdateAddr .el-select,
#addOrUpdateAddr .el-cascader {
  width: 400px;
}
#addOrUpdateAddr .distpicker-address-wrapper select {
  width: 130px !important;
}
.on {
  background: #409eff;
  color: #fff !important;
  border-radius: 30px;
  padding: 3px 5px !important;
  font-size: 13px;
}
</style>

 
