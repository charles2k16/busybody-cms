<template>
  <div>
    <el-row :gutter="12">
      <h3>Welcome Brian !</h3>
      <br />
      <el-col :md="6" :sm="12">
        <DataCountCard
          title="Classes Booked"
          border="#055835"
          total-number="5"
          percentage="10"
        />
      </el-col>

      <el-col :md="6" :sm="12">
        <DataCountCard
          title="Classes Booked"
          border="#e80e0e"
          total-number="14"
          percentage="20"
        />
      </el-col>
      <el-col :md="6" :sm="12">
        <DataCountCard
          title="Revenue"
          border="#cc9e08"
          total-number="$500"
          percentage="30"
        />
      </el-col>
      <el-col :md="6" :sm="12">
        <DataCountCard
          title="User/Clients"
          border="#440A66"
          total-number="35"
          percentage="50"
        />
      </el-col>
    </el-row>
    <el-row :gutter="0" class="mt-20">
      <el-col :span="24" class="second_cards">
        <el-row class="finance">Finance</el-row>
        <el-row class="bar_charts">
          <BarCharts />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarCharts from '../components/BarCharts.vue'
import DataCountCard from '~/components/DataCountCard.vue'
export default {
  components: {
    BarCharts,
    DataCountCard,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
