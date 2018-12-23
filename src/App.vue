<template>
  <div>
    <app-navbar class="mb-5"></app-navbar>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <app-search></app-search>
        </div>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import appNavbar from "./components/Navbar";
import appSearch from "./components/Search";

export default {
  name: "app",
  components: {
    appNavbar,
    appSearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
