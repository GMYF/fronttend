<template>
  <div>
    <el-dialog
      v-dialogDrag
      ref="dialog__wrapper"
      :visible.sync="dialogVisible"
      title="提示"
      width="80%"
      @closed="handleClose">
      <div class="dialog-body">
        <div
          v-dialogDragWidth="$refs.dialog__wrapper"
          class="line">
          <span>session已失效，请重新登录</span>
          <span
            slot="footer"
            class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="dialogVisible = false">确 定</el-button>
          </span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: true
    }
  },
  methods: {
    handleClose (done) {
      this.$router.push({'path': '/user/login'})
    }

  }
}
</script>
