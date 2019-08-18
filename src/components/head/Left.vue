<template>
    <div class="head_lt">
    <div class="sub_div">
        <a href="#" @click="goUser()">用户管理</a>
    </div>
    
    <div class="sub_div">测试</div>
    
    <div class="sub_div">测试</div>
    </div>
</template>
<style scoped>
    .head_lt{
        width: 170px;
        height: 1000px;
        float: left;
        margin-top: -60px;
        background-color: cadetblue;
    }
    .sub_div{
        background-color:brown;
        margin-top: 60px;
        float: left;
        width: 100%;
        height: 20px;
    }
</style>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.goUser = function () {
      this.$router.push({path: '/user/detail'})
    }
  }
}
</script>
