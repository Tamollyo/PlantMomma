<template>
  <div class="navi">
  <nav>
    <FactNote />
    <WeatherDash v-if="currentWeather" :currentWeather="currentWeather" />
    <div v-else>
      <h3>No Weather</h3>
    </div>
    <router-link class="a" to="/">Plants</router-link>
    <router-link class="a" to="/plant">Facts</router-link>
    <router-link class="a" to="/about">About</router-link>
  </nav>
  </div>
</template>

<script>
  import FactNote from '../components/FactNote.vue'
  import axios from 'axios'
  import WeatherDash from '../components/WeatherComp.vue'
  const API_KEY = process.env.VUE_APP_WEATHER_KEY
  console.log(API_KEY, "API")
  export default {
    name: 'NavBar', 
    components: {
      FactNote,
      WeatherDash
    },
    data: () => ({
      currentWeather: null
    }),
    mounted: function() {
      navigator.geolocation.getCurrentPosition(async position => {
        await this.getCurrentWeather(position.coords)
      })
    },
    methods: {
      async getCurrentWeather(coords) {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${API_KEY}`)
        this.currentWeather = res.data.current
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');
nav {
  display: flex;
  justify-content: right;
  font-family: 'Square Peg', cursive;
  font-size: 3rem;
}


.a { 
  text-decoration: none;
  margin: 0 15px ;
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;
  padding: 16px 0;
  position: relative;
  display: block;
  font-size: 2rem;;
  color: #ecf0f1;
  text-transform: uppercase;
  padding: 4px 0;
  transition: 0.5s;
}

.a::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  background: #9FB079;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}

.a:hover {
  color: #9FB079;
}

.a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

</style>
