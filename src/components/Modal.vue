<template>
  <div>
    <b-button @click="showModal" ref="btnShow">Open Modal</b-button>
    <b-button @click="toggleModal" ref="btnToggle">Toggle Modal</b-button>

    <b-modal id="modal-tall" ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
      <p v-for="(item,index) in [1,2,3,4,5,6,7,8,9,0]" :key="index">{{item}}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
