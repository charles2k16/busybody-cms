<template>
  <div style="width: 100%">
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
        labels: [' Causewau Bay', 'Shek Mun', 'Fo Tan'],
        datasets: [
          {
            label: 'Capacity',
            data: [5, 20, 16],
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
