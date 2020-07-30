<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">ToDo</router-link> |
      <router-link to="/drag">Drag</router-link> |
      <router-link to="/chart">Chart</router-link>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
