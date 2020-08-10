<template>
  <div>
    <!-- b-modalのIDで呼べる -->
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
    <ModalComponent />
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
    return {};
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
