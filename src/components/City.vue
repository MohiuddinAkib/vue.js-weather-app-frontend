<template>
  <section>
    <router-link class="btn btn-danger" to="/" v-if="!loading">Go back</router-link>
    <template v-if="!error">
      <h1 v-if="loading">Loading...</h1>
      <template v-else>
        <h1 class="text-center">Search results</h1>
        <div class="row mt-3">
          <template v-if="weathers.length > 0">
            <div class="col-md-3" v-for="weather in weathers" :key="weather.id">
              <weather :weather="weather"></weather>
            </div>
          </template>

          <div class="col-md-12 text-center" v-if="weathers.length === 0">
            <h5 class="lead">No results were found. Try changing the keyword!</h5>
          </div>
        </div>
      </template>
    </template>
    <div class="alert alert-danger" v-else>
      <strong>Something went wrong</strong>
    </div>
  </section>
</template>

<script>
import WeatherService from "../services/weatherService";
import weather from "./weather";
import { eventBus } from "../main";

export default {
  name: "city-weather",
  components: {
    weather
  },
  data: function() {
    return {
      weathers: [],
      loading: true,
      error: false
    };
  },
  watch: {
    $route: "fetchWeather"
  },
  created: function() {
    eventBus.$on("cityWasReset", () => {
      this.loading = true;
    });
  },
  methods: {
    fetchWeather: async function(to) {
      try {
        const { data } = await WeatherService.searchLocation(to.params.keyword);
        this.weathers = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    }
  },
  beforeRouteEnter: function(to, from, next) {
    next(vm => vm.fetchWeather(to));
  }
};
</script>

<style scoped>
</style>