 
<template>
    <el-dialog :close-on-click-modal="true" :visible.sync="visible" title="委托客户列表">
        <div id="main">
            <el-table v-loading="isLoading" :data="dataList" border="" style="width: 100%;">
                <el-table-column fixed label="序号" align="center" width="60px">
                    <template slot-scope="scope">
                        <span>{{ scope.$index+(queryCondition.page - 1) * queryCondition.size + 1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="agentName" header-align="center" align="left" label="委托单位/委托人" :show-overflow-tooltip="true" />
                <el-table-column prop="agentUserName" header-align="center" align="left" label="统一社会信用代码" :show-overflow-tooltip="true"/>
                <el-table-column prop="agentCode" header-align="center" align="center" label="联系人" />
                <el-table-column prop="agentExamine"  header-align="center" align="right" label="手机" sortable />
                <el-table-column prop="agentPass" header-align="center" align="right" label="认证类型"/>
                <el-table-column prop="auditFailed" header-align="center" align="right" label="操作"/>
            </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取消</el-button>
            <el-button type="primary" @click="visible = false">确认</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      visible: false,
      isLoading: false,
      dataList:[]
    };
  },
  created() {},
  methods: {
    init(item) {
      this.visible = true;
      this.$nextTick(() => {});
    }
  }
};
</script>
 
