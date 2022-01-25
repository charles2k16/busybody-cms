<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <Sidebar />

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{ $auth.user.first_name }} </span>
      </el-header>

      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import global from '~/mixins/global.js'

Vue.mixin(global)
export default {}
</script>
