<template>
  <div>
    <h2>用户登录</h2>
    <div class="login">
      <div class="login_img">
        <img
          src="../../../static/img/img.jpg"
          alt="请登录"
          width="300px"
          height="250px">
      </div>
      <div class="login_user">
        <el-form
          ref="form"
          :model="form"
          label-width="50px">
          <el-row>
            <el-col >
              <el-form-item label="用户名">
                <el-input
                  v-model="user.name"
                  width="150px"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="密码">
                <el-input
                  v-model="user.password"
                  width="200px"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button @click=" onsubmit() ">提交</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login {
  margin-left: 30%;
  margin-top:0%;
  margin-right: 25%;
  margin-bottom:0%;
  width: 600px;
  height: 250px;
  position:relative;
  background-color: #df3fdf;
}
.login_user {

}
.login_img{
  margin-left: 0%;
  float: left;
}
</style>
<script>
import https from '../..//http'

export default {
  name: 'DashBoard',
  data () {
    return {
      user: {
        name: '',
        password: ''
      },
      form: {
        id: ''
      }
    }
  },
  created () {
    this.onsubmit = function () {
      console.log(this.user.name + ',' + this.user.password)
      let param = {
        'username': this.user.name,
        'password': this.user.password
      }
      console.log(param.username + '----' + param.password)
      https.fetchPost('/api/user/login', param).then(data => {
        if (data.data.status === 1) {
          // 跳转页面
          this.$router.push({path: '/dashboard'})
        }
      })
    }
  }
}
</script>
