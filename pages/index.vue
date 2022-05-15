<template>
  <div>
    <el-row :gutter="12">
      <h3>Welcome Brian !</h3>

      <el-col :md="6" :sm="12">
        <div>
          <h4>Bookings</h4>

          <div>
            <div>
              <i class="el-icon-caret-top"></i>
              <h2>234</h2>
            </div>

            <el-progress
              type="dashboard"
              :percentage="percentage"
              :color="colors"
            ></el-progress>
          </div>
        </div>
      </el-col>

      <el-col :md="6" :sm="12">
        <el-card shadow="always" class="cards">
          <div>
            <div style="display: flex">
              <section>
                <FontAwesomeIcon
                  icon="fa-solid fa-dumbbell"
                  class="fontUsers"
                />
              </section>
              <h3 class="card_text">Bookings</h3>
            </div>
            <div></div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="6" :sm="12">
        <el-card shadow="always" class="cards">
          <div>
            <div style="display: flex">
              <section>
                <FontAwesomeIcon
                  icon="fa-solid fa-layer-group"
                  class="fontUsers"
                />
              </section>
              <h3 class="card_text">Classes</h3>
            </div>
            <div></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="mt-20">
      <el-col :span="24" class="second_cards">
        <el-row class="finance">Finance</el-row>
        <el-row class="bar_charts">
          <BarCharts />
          <!-- <div style="width: 100%; height: 300px; max-height: 300px"> -->
          <!-- <client-only placeholder="Loading...">
            <lineChart
              :chart-options="barChartOptions"
              :chart-data="data"
              chart-id="lineChart"
              :height="170"
              :width="300"
            />
          </client-only> -->
          <!-- </div> -->
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarCharts from '../components/BarCharts.vue'
export default {
  components: {
    BarCharts,
  },
  data() {
    return {
      percentage: 10,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .cards {
    height: 150px;
    .card_content {
      display: flex;
    }

    .fontUsers {
      font-size: 40px;
      color: var(--color-primary);
    }
    .card_text {
      align-self: center;
      padding-left: 35px;
    }
  }
  .second_cards {
    height: 500px;
    width: 100%;
    display: flex;
    border-radius: 13px;
    flex-direction: column;

    padding: 20px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    .bar_charts {
      width: 100%;
    }
    .finance {
      width: 100%;
    }
  }
}
@media (min-width: 1024px) {
  .cards {
    padding: 10px;
    height: 200px;
    .card_content {
      justify-content: space-between;
    }
  }
  .second_cards {
    flex-direction: row;
    height: 550px;
    .finance {
      height: 100%;
      width: 30%;
      padding-right: 10px;
    }

    .bar_charts {
      width: 70%;
      overflow: hidden;
    }
  }
}
@media (min-width: 1440px) {
  .cards {
    .card_content {
      justify-content: space-around;
      padding: 0 10px;
    }
  }
}
</style>
