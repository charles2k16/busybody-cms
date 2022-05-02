<template>
  <div>
    <el-row :gutter="12">
      <el-col :md="8" :sm="12">
        <el-card shadow="always" class="cards"
          ><div>
            <div style="display: flex">
              <section>
                <FontAwesomeIcon icon="fa-solid fa-users" class="fontUsers" />
              </section>
              <h3 class="card_text">Active Users</h3>
            </div>
            <div>
              <!-- content -->
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :md="8" :sm="12">
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
      <el-col :md="8" :sm="12">
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
      // data: {
      //   labels: [
      //     '2019-06',
      //     '2019-07',
      //     '2019-08',
      //     '2019-09',
      //     '2019-10',
      //     '2019-11',
      //     '2019-12',
      //     '2020-01',
      //     '2020-02',
      //     '2020-03',
      //   ],
      //   datasets: [
      //     {
      //       label: 'Visualizaciones',
      //       data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
      //       backgroundColor: 'rgba(20, 255, 0, 0.3)',
      //       borderColor: 'rgba(100, 255, 0, 1)',
      //       borderWidth: 2,
      //     },
      //   ],
      // },
      // barChartOptions: {
      //   responsive: true,
      //   legend: {
      //     display: false,
      //   },
      //   title: {
      //     display: true,
      //     text: 'Google analytics data',
      //     fontSize: 24,
      //     fontColor: '#6b7280',
      //   },
      //   tooltips: {
      //     backgroundColor: '#17BF62',
      //   },
      //   scales: {
      //     xAxes: [
      //       {
      //         gridLines: {
      //           display: true,
      //         },
      //       },
      //     ],
      //     yAxes: [
      //       {
      //         ticks: {
      //           beginAtZero: true,
      //           max: 7,
      //           min: 0,
      //           stepSize: 1,
      //         },
      //         gridLines: {
      //           display: true,
      //         },
      //       },
      //     ],
      //   },
      // },
    }
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .cards {
    height: 130px;
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
    // height: 300px;
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
    height: 150px;
  }
  .second_cards {
    flex-direction: row;

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
</style>
