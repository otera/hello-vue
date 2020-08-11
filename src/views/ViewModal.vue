<template>
  <div>
    <!-- b-modalのIDで呼べる -->
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
    <ModalComponent
      :requrl="reqUrl"
      :items="items"
      :change="this.callTest"
      @emitChange="callTestSecond"
    />
  </div>
</template>

<script>
import ModalComponent from "@/components/Modal.vue";

export default {
  name: "ViewModal",
  components: {
    ModalComponent
  },
  data() {
    return {
      reqUrl: "htto://localhost:8080/test",
      items: [
        { name: "AAA" },
        { name: "BBB" },
        { name: "CCC" },
        { name: "DDD" }
      ]
    };
  },
  methods: {
    /** 子から関数呼ぶテスト */
    callTest(data) {
      console.log("Call Test", data);
    },
    /** 子から関数呼ぶテスト2 */
    callTestSecond(data) {
      console.log("Call Test 2", data);
    }
  }
};
</script>

<style lang="scss">
.chart-view {
  height: 450px;
  width: 450px;
}
</style>
