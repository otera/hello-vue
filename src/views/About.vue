<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NameComponent v-slot:name>Name Slot Test</NameComponent>
    <NameComponent v-slot:adrs>Tokyo</NameComponent>
  </div>
</template>

<script>
import NameComponent from "@/components/Name.vue";

export default {
  components: {
    NameComponent,
  },
};
</script>
