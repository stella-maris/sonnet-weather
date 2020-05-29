<template>
  <div id="weatherWidget">
    <DatePicker />
    <Sonnets />
    <WeatherApp />
  </div>
</template>

<script>
import Sonnets from '@/components/display/Sonnets.vue';
import WeatherApp from '@/components/display/WeatherApp.vue';
import DatePicker from '@/components/forms/DatePicker.vue';

export default {
  name: "WeatherWidget",
  components: {
      DatePicker,
      Sonnets,
      WeatherApp,
  }
}
</script>

<style lang="scss" scoped>

</style>