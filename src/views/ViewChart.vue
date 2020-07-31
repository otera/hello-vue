<template>
  <chart class="chart-view" :chartdata="chartData" :options="chartOptions"></chart>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  name: "ViewChart",
  components: {
    Chart,
  },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Bar",
            data: [10, 20, 30, 40, 70, 30],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
          // {
          //   label: "Line Dataset",
          //   data: [10, 50, 20, 30, 30, 40],
          //   borderColor: "#CFD8DC",
          //   fill: false,
          //   type: "line",
          //   lineTension: 0.3,
          // },
        ],
      },
      chartOptions: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Month",
                fontSize: 18,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 15,
              },
            },
          ],
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.chart-view {
  height: 450px;
  width: 450px;
}
</style>
