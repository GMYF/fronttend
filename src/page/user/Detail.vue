<template>
  <div>
    <h3>用户详细</h3>
    <div>
      <el-button
        type="text"
        @click="dialogVisible =true" >点击打开dialog</el-button>
    </div>

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
          <span>这是一段信息</span>
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
    <a
      href="#"
      @click="goDetail">跳转用户详情</a>
    <div>
      <el-upload
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :before-upload="beforeUpload"
        :limit="3"
        :on-exceed="handlExceed"
        :file-list="fileList"
        class="upload-demo"
        action="/api/user/file"
        multiple>
        <el-button
          size="small"
          type="primary">点击上传</el-button>
        <div
          slot="tip"
          calss="el-upload__tip">只能上传xxx文件</div>
      </el-upload>
      <el-button
        size="mini"
        type="primary"
        @click="submitUpload">手动上传</el-button>
    </div>
  </div>
</template>
<style scoped>
  .dialog-body{
    width: 300px;
    height: 120px;
  }
  .upload-demo{
    width: 300px;
    height:150px;
  }
</style>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      userId: 0,
      fileList: [],
      uploadForm: new FormData()
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
          done()
        })
        .catch(_ => {})
    },
    goDetail () {
      this.$getRequest('/api/user/detail/' + this.userId).then(data => {
        if (data.data.status === 1) {
          // 跳转页面
          console.log('用户详情获取成功')
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
    },
    handlePreview (file) {
      console.log(file)
    },
    handlExceed () {
      this.$message.warning('当前选择了3个文件，本次选择了个文件')
    },
    beforeRemove (file, fileList) {

    },
    beforeUpload (file, fileList) {
      console.log('file->' + file + 'fileList' + fileList)
      this.uploadForm.append('file', file)
      return false
    },
    submitUpload () {
      let data = this.uploadForm
      this.$postRequest('/api/user/file', data).then(data => {
        console.log('data->' + data)
      })
    }
  }
}
</script>
