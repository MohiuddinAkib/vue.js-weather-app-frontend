<template>
  <section>
    <router-link class="btn btn-danger" to="/" v-if="!loading">Go back</router-link>
    <template v-if="!error">
      <h1 v-if="loading">Loading...</h1>
      <template v-else>
        <h1 class="text-center">Weathers of {{weather.city_name}}</h1>
        <div class="row mt-3">
          <div class="col-md-3" v-for="w in weather.weathers" :key="w.id">
            <weather :weather="w"></weather>
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
import weather from "./weather";
import WeatherService from "../services/weatherService";

export default {
  name: "weather-details",
  components: {
    weather
  },
  data: function() {
    return {
      weather: {},
      loading: true,
      error: false
    };
  },
  created: function() {
    this.fetchWeathers();
  },
  methods: {
    fetchWeathers: async function() {
      try {
        const { data } = await WeatherService.searchWeathers(
          this.$route.params.woeid
        );
        this.loading = false;
        this.weather = data;
      } catch (error) {
        this.error = true;
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
</style>