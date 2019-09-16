<template>
  <div>
    <h3>用户详细</h3>
    <h2>用户名 {{ user.name }} {{ user.phone }}</h2>
    <el-form>
      <el-row>
        <el-col :span="3">
          <el-form-item label="设置">
            <el-input ref="name" v-model="user.name" type="text" width="103px" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="设置">
            <el-input ref="phone" v-model="user.phone" type="text" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <a href="#" @click="userDetail()">点我</a>
    <div>
      <el-button type="text" @click="dialogVisible =true">点击打开dialog</el-button>
    </div>
    <el-dialog
      v-dialogDrag
      ref="dialog__wrapper"
      :visible.sync="dialogVisible"
      title="提示"
      width="80%"
      @closed="handleClose"
    >
      <div class="dialog-body">
        <div v-dialogDragWidth="$refs.dialog__wrapper" class="line">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<style scoped>
.dialog-body {
  width: 300px;
  height: 120px;
}
</style>
<script>
import https from "../../http";
export default {
  data() {
    return {
      dialogVisible: false,
      user: {}
    };
  },
  created() {
    this.userDetail();
  },
  methods: {
    closeShadow() {
      this.dialogVisible = false;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    userDetail: function() {
      https.fetchGet("/api/user/detail/1").then(data => {
        this.user = data.data.data;
      });
    }
  }
};
</script>
