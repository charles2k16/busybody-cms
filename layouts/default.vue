<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <Sidebar />

    <el-container>
      <!-- <el-header style="text-align: right; font-size: 12px">
        <Header />
      </el-header> -->

      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import global from '~/mixins/global.ts'

Vue.mixin(global)
export default {}
</script>
