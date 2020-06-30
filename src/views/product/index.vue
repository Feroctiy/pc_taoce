<template>
  <div class="content main_width">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:40px;">
      <el-breadcrumb-item :to="{ path: '/' }">所有产品</el-breadcrumb-item>
      <el-breadcrumb-item>产品检验</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 产品列表 -->
    <el-card class="box-card product">
      <div slot="header" class="clearfix">
        <span class="header-title">
          所选条件
          <i class="el-icon-arrow-right"></i>
        </span>
        <el-tag v-for="tag in tags" :key="tag.name" size="small" closable>{{tag.name}}</el-tag>
      </div>
      <div class="filter">
        <!-- 一级分类 -->
        <el-row :gutter="20">
          <el-col :span="2">
            <div>分类</div>
          </el-col>
          <el-col :span="1">
            <div>
              <el-link
                style="margin-right:0"
                @click="getCategory('')"
                :class="param.cateOne == '' ? 'on':''"
              >不限</el-link>
            </div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <div>
              <el-link
                v-for="item in categoryList"
                :underline="false"
                :key="item.id"
                :class="param.cateOne == item.id ? 'on':''"
                @click="getCategory(item.id)"
              >{{item.cname}}</el-link>
            </div>
          </el-col>
        </el-row>
        <!-- 二级分类 -->
        <el-row :gutter="20" class="margin-top" v-if="twoStatus">
          <el-col :span="3">
            <div>&nbsp;</div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <el-card shadow="never">
              <el-link :class=" param.cateTwo == '' ? 'on':''"
                @click="getCategoryTwo('')">全部</el-link>
              <el-link
                v-for="item in categoryListTwo"
                :underline="false"
                :key="item.id"
                :class=" param.cateTwo == item.id ? 'on':''"
                @click="getCategoryTwo(item.id)"
              >{{item.cname}}</el-link>
            </el-card>
          </el-col>
        </el-row>
        <!-- 三级分类 -->
        <el-row :gutter="20" class="margin-top" v-if="threeStatus">
          <el-col :span="3">
            <div>&nbsp;</div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <el-card shadow="never">
              <el-link :class="param.cateThree == '' ? 'on':''" @click="getCategoryThree('')">全部</el-link>
              <el-link
                :underline="false"
                v-for="item in categoryListThree"
                :key="item.id"
                :class="param.cateThree == item.id ? 'on':''"
                @click="getCategoryThree(item.id,item.cname)"
              >{{item.cname}}</el-link>
            </el-card>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="2">
            <div>服务需求</div>
          </el-col>
          <el-col :span="1">
            <div style="width:80px">
              <el-link style="margin-right:0" :class="param.fwxq == '' ? 'on':''" @click="getserverId('')">不限</el-link>
            </div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <div>
              <el-link
                :underline="false"
                v-for="item in serverList"
                :key="item.id"
                :class="param.fwxq == item.id ? 'on':''"
                @click="getserverId(item.id)"
              >{{item.mc}}</el-link>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="2">
            <div>相关标准</div>
          </el-col>
          <el-col :span="1">
            <div style="width:80px">
              <el-link style="margin-right:0" @click="getStandard('')" :class=" param.xgbz == '' ? 'on':''">不限</el-link>
            </div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <div>
              <el-link
                :underline="false"
                v-for="item in cateStandardList"
                :key="item.id"
                :class=" param.xgbz == item.id ? 'on':''"
                @click="getStandard(item.id)"
              >{{item.mc}}</el-link>
              <div class="filter-input margin-top">
                <el-input placeholder="请输入内容" class="input-with-select" size="small">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="2">
            <div>相关指标</div>
          </el-col>
          <el-col :span="1">
            <div style="width:80px">
              <el-link style="margin-right:0" :class=" param.xgzb == '' ? 'on':''"
                @click="getStandard1('')">不限</el-link>
            </div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <div>
              <el-link
                v-for="item in standardList"
                :key="item.id"
                :class=" param.xgzb == item.id ? 'on':''"
                @click="getStandard1(item.id)"
              >{{item.mc}}</el-link>
              <div class="filter-input margin-top">
                <el-input placeholder="请输入内容" class="input-with-select" size="small">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="2">
            <div>检验资质</div>
          </el-col>
          <el-col :span="1">
            <div style="width:80px">
              <el-link style="margin-right:0" :class=" param.jyzz == '' ? 'on':''"
                @click="getjyzz('')">不限</el-link>
            </div>
          </el-col>
          <el-col :span="21" class="filter-select">
            <div>
              <el-link
                v-for="item in testingQualificationList"
                :key="item.id"
                :class=" param.jyzz == item.id ? 'on':''"
                @click="getjyzz(item.id)"
              >{{item.mc}}</el-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <!-- 查询条件 -->
    <el-card class="box-card">
      <div class="clearfix list-header">
        <div>
          <el-radio-group>
            <el-radio-button label="top">综合</el-radio-button>
            <el-radio-button label="right">服务量</el-radio-button>
            <el-radio-button label="bottom">评价</el-radio-button>
            <el-radio-button label="left">服务周期</el-radio-button>
          </el-radio-group>
          <el-input placeholder="请输入内容" style="width:300px;margin-left:15px;"></el-input>
        </div>
        <div>
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append">搜索</el-button>
          </el-input>
        </div>
      </div>
    </el-card>
    <div style="overflow:auto;margin-bottom:30px;" class="bg-white">
      <el-row :gutter="10" style="padding: 20px;margin:0">
        <el-col :span="5" v-for="(item,index) in goodsList" :key="index">
          <div class="text-center" @click="goDetail(item.goods_id,item.shopid)">
            <img :src="item.goods_img" alt="" style="height:200px;">
            <div class="price">¥{{item.goods_price}}</div>
            <div class="name">{{item.goods_name}}</div>
            <div class="des">{{item.jgmc}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      img: "http://wj.zljweb.com/zljfiles/BasicImages/nzfz.jpg",
      name: "王小虎",
      id: "1"
    };
    return {
      param: {
        cateOne: "", // 一级分类
        cateTwo: "", // 二级分类
        cateThree: "", // 三级分类
        jyzz: "", // 检验资质
        fwxq: "", //服务需求
        xgzb: "",
        xgbz: "",
        limit:'100'
      },
      twoStatus: true,
      threeStatus: true,
      count: 10,
      loading: false,
      tableData: Array(24).fill(item),
      currentPage: 1,
      tags: [],
      categoryList: [],
      categoryListTwo: [],
      categoryListThree: [],
      serverList: [],
      testingQualificationList: [],
      standardList: [],
      cateStandardList: [],
      goodsList: []
    };
  },
  created() {
    this.param.cateOne = this.$route.query.cateOne;
    this.param.cateTwo = this.$route.query.cateTwo;
    this.param.cateThree = this.$route.query.cateThree;
    this.getCategoryOneList(); // 一级分类
    this.getCategoryTwoList(this.param.cateOne, "1"); // 2级分类
    this.getCategoryTwoList(this.param.cateTwo, "2"); // 3级分类

    this.getServiceList();
    this.getStandardList();
    this.getCategoryStandard();

    this.$fetch("/api/testingQualification/lisAll").then(response => {
      this.testingQualificationList = response.data;
    });

    this.getList();
  },
  methods: {
    // 获取商品的一级分类
    getCategoryOneList() {
      this.$fetch("/api/category/oms/listOne").then(response => {
        this.categoryList = response.data[0].categoryList;
      });
    },
    // 一级分类点击事件
    getCategory(id) {
      this.param.cateOne = id;
      this.twoStatus = false;
      this.threeStatus = false;
      this.getCategoryTwoList(id, "1"); // 二级分类编号
      this.getStandardList();
      this.getCategoryStandard();
      this.getList(); // 商品列表
      // 相关指标/相关标准
    },
    // 获取二级分类、三级分类列表
    getCategoryTwoList(id, type) {
      this.$fetch("/api/category/oms/listDown/" + id).then(response => {
        if (type == "1") {
          this.categoryListTwo = response.data;
          this.twoStatus = true;
        } else {
          this.categoryListThree = response.data;
          this.threeStatus = true;
        }
        this.getStandardList();
        this.getCategoryStandard();
        this.getList();
      });
    },
    // 二级分类、三级分类点击事件
    getCategoryTwo(id) {
      this.param.cateTwo = id;
      this.getCategoryTwoList(id, "2");
    },
    getCategoryThree(id, name) {
      this.param.cateThree = id;
      this.tags[0] = { name: name, type: "" };
    },
    // 获取服务需求列表
    getServiceList() {
      this.$fetch("/api/serviceDemand/listAll", {}).then(response => {
        this.serverList = response.data;
      });
    },
    // 服务需求点击事件
    getserverId(id) {
      this.param.fwxq = id;
      this.getList();
    },
    // 获取相关标准的列表
    getCategoryStandard() {
      this.$fetch("/api/categoryStandard/lisAll", {
        cone: this.param.cateOne,
        ctwo: this.param.cateTwo,
        cthree: this.param.cateThree
      }).then(response => {
        this.cateStandardList = response.data;
      });
    },
    getStandardList() {
      this.$fetch("/api/standardIndex/lisAll", {
        cone: this.param.cateOne,
        ctwo: this.param.cateTwo,
        cthree: this.param.cateThree,
        stid: this.param.xgbz
      }).then(response => {
        this.standardList = response.data;
      });
    },

    getStandard(id) {
      this.param.xgbz = id;
      this.getStandardList();
      this.getList();
    },
    getStandard1(id) {
      this.param.xgzb = id;
      this.getList();
    },

    getList() {
      this.goodsList = [];
      this.$post("/api/goods/goodsList", this.param).then(response => {
        this.goodsList = response.data.records;
      });
    },
    // 一级分类

    //相关指标

    // 检验资质
    getjyzz(id) {
      this.param.jyzz = id;
      this.getList();
    },

    goDetail(id, shopid) {
      this.$router.push({
        path: "/productDetail",
        query: { id: id, shopid: shopid }
      });
    }
  }
};
</script>

<style scoped>
.filter-class-sub {
  background-color: #fafafa;
  margin-top: 12px;
}
.list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.box-card {
  font-size: 14px;
}
.header-title {
  line-height: 24px;
  font-size: 14px;
  color: #303133;
  font-weight: 400;
}
.product .el-tag + .el-tag {
  margin-left: 10px;
}
.el-divider--horizontal {
  margin: 16px 0 !important;
}
.el-divider {
  background: none !important;
  border-bottom: 1px dashed #dcdfe6;
}

.el-link {
  margin-right: 15px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: 0;
  padding: 0;
}
.on {
  background: #409eff;
  color: #fff !important;
  border-radius: 30px;
  /* padding: 0 4px 0 3px !important; */
}
.filter-input {
  width: 200px !important;
  display: inline-flex !important;
}
.el-col-5 {
  width: calc(100% / 5);
}
.price {
  line-height: 30px;
  font-size: 18px;
  color: #e4393c;
}
.name {
  font-size: 15px;
  color: #303133;
  font-weight: 400;
}
.des {
  line-height: 30px;
  font-size: 13px;
  color: #999;
}
</style>
