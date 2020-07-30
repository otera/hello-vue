<template>
  <chart class="chart-view"></chart>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  name: "ViewChart",
  components: {
    Chart,
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
