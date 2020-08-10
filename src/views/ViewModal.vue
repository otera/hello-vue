<template>
  <div>
    <!-- b-modalのIDで呼べる -->
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
    <ModalComponent :requrl="reqUrl" :items="items" />
  </div>
</template>

<script>
import ModalComponent from "@/components/Modal.vue";

export default {
  name: "ViewModal",
  components: {
    ModalComponent,
  },
  data() {
    return {
      reqUrl: "htto://localhost:8080/test",
      items: ["AAA", "BBB", "CCC", "DDD", "EEE"],
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
