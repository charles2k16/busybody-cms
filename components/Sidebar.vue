<template>
  <div>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']" router>
        <el-menu-item index="1" :route="{ path: '/' }">Dasboard</el-menu-item>
        <el-menu-item index="2" :route="{ path: '/schedules' }"
          >Calendar</el-menu-item
        >

        <el-menu-item index="3">Report</el-menu-item>

        <el-submenu index="2">
          <template slot="title">Manage</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" :route="{ path: '/trainers' }"
              >Trainers</el-menu-item
            >
            <el-menu-item index="2-2" :route="{ path: '/clients' }"
              >Clients</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
