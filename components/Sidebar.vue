<template>
  <div>
    <el-aside>
      <div>
        <img
          src="https://via.placeholder.com/300x200?text=Company+Logo"
          alt=""
        />
      </div>
      <el-menu :default-openeds="['1']" router>
        <el-menu-item index="1" :route="{ path: '/' }">Dasboard</el-menu-item>
        <el-menu-item index="2" :route="{ path: '/schedules' }"
          >Calendar</el-menu-item
        >

        <el-menu-item index="3">Report</el-menu-item>

        <el-submenu index="2">
          <template slot="title">Manage</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" :route="{ path: '/classes' }"
              >Classes</el-menu-item
            >
            <el-menu-item index="2-2" :route="{ path: '/trainers' }"
              >Trainers</el-menu-item
            >
            <el-menu-item index="2-3" :route="{ path: '/clients' }"
              >Clients</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3">Facilities</el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style lang="scss" scoped>
.el-aside {
  width: 300px;
  height: 100vh;
  background-color: rgb(234, 236, 240);
}

.el-menu {
  background-color: transparent;
}
</style>
