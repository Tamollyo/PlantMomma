<template>
  <div>
    <div>
      <h1>{{name}}</h1>
    </div>
    <div>
      {{description}}
    </div>
    <div>
      <img :src="image" :alt="name">
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  // const BASE_URL = 'http://localhost:3001/api'

  export default {
    name: 'PlantCard',
    props: {
      name: String,
      description: String,
      sun: String,
      schedule: String,
      maintenance: String,
      image: String,
    }
  }
</script>