<template>
  <div class="dashboard_card" :style="`border-bottom: 5px solid ${border}`">
    <h4>{{ title }}</h4>

    <div class="data">
      <div class="data__count">
        <i v-if="percentage < 20" class="el-icon-bottom"></i>
        <i v-else class="el-icon-top"></i>
        <span>{{ totalNumber }}</span>
      </div>

      <el-progress
        type="dashboard"
        :percentage="percentage"
        :color="colors"
      ></el-progress>
    </div>
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
    border: {
      type: String,
      default: '#4c0a72',
    },
    totalNumber: {
      type: String,
      default: '20',
    },
    percentage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      colors: [
        { color: '#ee0a0a', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.dashboard_card {
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  .data {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__count {
      i {
        font-size: 30px;
        font-weight: bold;
        margin-right: 10px;
      }
      .el-icon-bottom {
        color: #ee0a0a;
      }
      .el-icon-top {
        color: #3ebb09;
      }
      span {
        font-size: 35px;
        font-weight: bold;
      }
    }
  }
}
</style>
