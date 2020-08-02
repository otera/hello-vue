<template>
  <div>
    <p>name:<slot name="name">Mirai Taro</slot></p>
    <p>address:<slot name="adrs">Osaka</slot></p>
  </div>
</template>

<script>
export default {
  name: "NameComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
