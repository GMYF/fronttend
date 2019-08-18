<template>
    <div>
        <h3>用户详细</h3>
        <div>
          <el-button type="text"  @click="dialogVisible =true" >点击打开dialog</el-button>
        </div>
      
         <el-dialog :visible.sync="dialogVisible"  @closed="handleClose" title="提示"
        v-dialogDrag width="80%" ref="dialog__wrapper">
        <div class="dialog-body">
          <div  class="line" v-dialogDragWidth="$refs.dialog__wrapper">
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
  .dialog-body{
    width: 300px;
    height: 120px;
  }
</style>
<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  created () {
    
  },
  methods: {
    closeShadow () {
      this.dialogVisible = false
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>
