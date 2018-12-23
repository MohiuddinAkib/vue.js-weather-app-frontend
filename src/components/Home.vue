<template>
  <div class="row">
    <div class="col-sm-12" v-if="!error">
      <h1 v-if="loading">Loading...</h1>
      <div class="row" v-else>
        <div class="col-sm-12 mb-3">
          <h1 class="text-center">Today's weather</h1>
        </div>
        <div class="col-md-3" v-for="weather in weathers" :key="weather.city_name">
          <router-link
            style="text-decoration: inherit;color: inherit"
            :to="{ name: 'details-weather', params: { woeid: weather.woeid }}"
          >
            <weather :weather="weather"></weather>
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-md-12" v-else>
      <div class="alert alertdanger">
        <strong>something went wrong</strong>
      </div>
    </div>
  </div>
</template>

<script>
import weather from "./weather";
import WeatherService from "../services/weatherService";

export default {
  name: "Home",
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
  created: function() {
    this.fetchWeathers();
  },
  methods: {
    fetchWeathers: async function() {
      try {
        const { data } = await WeatherService.getWeatherOfSixCities();
        if (data) {
          this.weathers = data;
          this.loading = false;
        }
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