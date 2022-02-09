<template>
  <div class="dashboard_header">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>View</el-dropdown-item>
        <el-dropdown-item>Add</el-dropdown-item>
        <el-dropdown-item>Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>{{ $auth.user.first_name }} </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>

<style lang="scss" scoped>
.dashboard_header {
  line-height: 50px;
  -webkit-box-shadow: 1px 1px 1px 1px rgb(243, 239, 239); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 1px 1px rgb(218, 214, 214); /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 1px 1px rgb(233, 231, 231);
}
</style>
