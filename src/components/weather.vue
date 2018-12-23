<template>
  <div class="card border-primary mb-3">
    <div class="card-header" v-if="weather.city_name">
      <h5 class="card-title">{{ weather.city_name }}</h5>
    </div>
    <img :src="weather.icon" class="img-fluid card-img-top" :alt="weather.icon">
    <div class="card-body">
      <p class="card-text" v-if="weather.applicable_day">
        <strong>Day</strong>
        : {{ weather.applicable_day }}
      </p>
      <p class="card-text">
        <strong>Min</strong>
        : {{ weather.min_temp }}
      </p>
      <p class="card-text">
        <strong>Max</strong>
        : {{ weather.max_temp }}
      </p>
      <p class="card-text">
        <strong>AVG</strong>
        : {{ weather.the_temp }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "weather",
  props: {
    weather: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>