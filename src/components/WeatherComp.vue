<template>
    <div class="weather">
      <h4>{{ Math.ceil(currentWeather.feels_like) }}&#176;</h4>
      <img :src="generateIconUrl(currentWeather.weather[0].icon)" />
    </div>
</template>

<script>
  export default {
    name: 'WeatherDash',
    props: ['currentWeather'],
    methods: {
      generateIconUrl(ico) {
        return `http://openweathermap.org/img/wn/${ico}@2x.png`
      }
    }
  }
</script>

<style>
.weather{
  width: 30%; 
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-content: top;
}

</style>