<template>
  <div style="width: 100%; height: 300px; max-height: 300px">
    <client-only placeholder="Loading...">
      <lineChart
        :chart-options="barChartOptions"
        :chart-data="data"
        :height="170"
        :width="300"
        chart-id="lineChart"
      />
      <!-- :height="150" -->
      <!-- :width="300" -->
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03',
        ],
        datasets: [
          {
            label: 'Visualizations',
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 255, 0, 1)',
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Google analytics data',
          fontSize: 24,
          fontColor: '#6b7280',
        },
        tooltips: {
          backgroundColor: '#17BF62',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    }
  },
}
</script>
<style scoped>
#lineChart {
  background: #17bf62;
}
.barCharts {
  height: 300px !important;
  width: 100% !important;
}
</style>
