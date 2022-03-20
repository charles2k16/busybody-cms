<template>
  <div>
    <!-- :style="`border-top: 8px solid ${color};`" -->
    <el-card>
      <div class="d-flex_justify_between">
        <span
          ><h3>{{ title }}</h3></span
        >
        <i
          :class="icon"
          :style="`color:${color}; font-size: 30px; font-weight:bold;`"
        ></i>
      </div>
      <div class="mt-10">
        <span class="dashboard_number">
          {{ totalNumber }}
        </span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DataCountCard',
  props: {
    title: {
      type: String,
      default: 'Data Count Text',
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#4c0a72',
    },
    totalNumber: {
      type: Number,
      default: 20,
    },
  },
})
</script>

<style lang="scss" scoped>
.dashboard_number {
  font-size: 1.7rem;
}
</style>
