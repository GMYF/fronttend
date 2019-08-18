<template>
    <div class="main_div">
        <div class="work"><router-view ></router-view></div>
    </div>
</template>
<style scoped>
    .main_div{
        background-color: blueviolet;
        float: left;
    }
    .work{
        width: 100%;
        height: 100%;
        position:absolute;
    }
</style>
<script>
export default {
    
}
</script>
