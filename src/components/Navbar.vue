<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link
        tag="a"
        class="navbar-brand mx-auto text-uppercase font-weight-bold"
        to="/"
      >{{ brand }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data: function() {
    return {
      brand: "Weather app"
    };
  }
};
</script>

<style scoped>
</style>