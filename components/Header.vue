<template>
  <div class="dashboard-header d-flex_justify_between">
    <h2 class="page__title">{{ pageTitle }}</h2>
    <div class="d-flex">
      <!-- <i class="el-icon-s-custom mr-10"></i> -->
      <el-dropdown>
        <span class="dashboard-header__user">
          <el-avatar
            size="large"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          <div class="ml-10">
            <span class="text-black">
              {{ getFullName($auth.user.first_name, $auth.user.last_name) }}
            </span>
            <br />
            <small>Admin User</small>
          </div>

          <i class="el-icon-arrow-down"></i>
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// interface HeaderState {
//   pageTitle: string
// }

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      pageTitle: '' as string,
    }
  },
  watch: {
    $route(to) {
      this.pageTitle = to.name
    },
  },
  created() {
    this.pageTitle = this.$route.name!
  },
})
</script>

<style lang="scss" scoped>
.dashboard-header {
  width: 100%;
  padding: 0 20px;

  .page__title {
    flex-basis: 100%;
    font-size: 1.4rem;
    font-family: var(--font-primary-bold);
  }

  &__user {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 250px;

    i {
      font-weight: bold;
      font-size: 1.2rem;
      margin-left: 10px;
      color: var(--text-base);
    }
  }
}
</style>
