<template>
  <div>
    <el-aside>
      <div>
        <img
          src="https://via.placeholder.com/300x150?text=Company+Logo"
          alt="logo"
        />

        <el-menu :default-openeds="['1']" router>
          <el-menu-item index="1" :route="{ path: '/' }">
            <i class="el-icon-s-data"></i>
            Dasboard</el-menu-item
          >
          <el-menu-item index="2" :route="{ path: '/calendar' }">
            <i class="el-icon-date"></i>
            Calendar</el-menu-item
          >

          <!-- <el-menu-item index="3">Memberships</el-menu-item> -->
          <el-menu-item index="3">
            <i class="el-icon-document-copy"></i>
            Report</el-menu-item
          >

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              Manage</template
            >
            <el-menu-item-group>
              <el-menu-item index="4-1" :route="{ path: '/classes' }"
                >Classes</el-menu-item
              >
              <el-menu-item index="4-2" :route="{ path: '/facilities' }"
                >Facilities</el-menu-item
              >
              <el-menu-item index="4-3" :route="{ path: '/trainers' }"
                >Trainers</el-menu-item
              >
              <el-menu-item index="4-4" :route="{ path: '/clients' }"
                >Clients</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>

      <div>
        <el-menu router>
          <el-menu-item index="5" :route="{ path: '/' }">
            <i class="el-icon-setting"></i>
            Settings</el-menu-item
          >
          <el-menu-item index="5" :route="{ path: '/schedules' }">
            <i class="el-icon-help"></i>
            Help</el-menu-item
          >
        </el-menu>
      </div>
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
  width: 250px !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

.el-menu {
  background-color: transparent;
}
</style>
