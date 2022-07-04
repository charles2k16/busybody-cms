<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <Sidebar />

    <el-container>
      <el-header>
        <Header />
      </el-header>

      <el-main>
        <div class="section_dashboard">
          <Nuxt />
        </div>
      </el-main>
      <footer class="d-flex_justify_between">
        <p>BusyBody Fitness Center © 2022. All right reserved.</p>
        <p><b>v-1.0.2</b></p>
      </footer>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import global from '~/mixins/global.ts'

Vue.mixin(global)
export default {}
</script>
