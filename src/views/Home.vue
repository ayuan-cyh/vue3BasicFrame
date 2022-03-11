<template>
    <el-menu default-active="/home" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="About">关于</el-menu-item>
    </el-menu>
    <router-view></router-view>
</template>
<script lang="ts" setup>
console.log('aaaa');
</script>