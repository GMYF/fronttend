<template>
  <div class="head_top">
    <div class="head_sub">div1</div>
    <div class="head_sub">div2</div>
    <div class="head_sub">
      <div>
        <a
          href="#"
          @click="goLogin()">登录</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head_top {
  width: 100%;
  height: 60px;
  margin-left: 170px;
  margin-top: 0px;
  background-color: blue;
}
.head_sub {
  width: 100px;
  height: 100%;
  margin-top: 0px;
  float: left;
  margin-left: 20px;
  background-color: aquamarine;
}
</style>
<script>
export default {
  created () {
    this.goLogin = function () {
      this.$router.push({path: '/user/login'})
    }
  }
}
</script>
