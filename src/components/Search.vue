<template>
  <form @submit.prevent="showCity">
    <div class="form-group">
      <div class="input-group mb-3">
        <input
          v-model.trim="city_name"
          type="text"
          class="form-control"
          placeholder="Enter city name"
        >
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit" id="button-addon1">Search</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "search-form",
  data: function() {
    return {
      city_name: ""
    };
  },
  methods: {
    showCity: function() {
      if (this.city_name.length > 0) {
        if (this.city_name !== this.$route.params.keyword) {
          eventBus.$emit("cityWasReset");
        }
        this.$router.push({
          name: "search-weather",
          params: {
            keyword: this.city_name
          }
        });
      } else {
        alert("Please enter a city name");
      }
    }
  }
};
</script>

<style scoped>
</style>