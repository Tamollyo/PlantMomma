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
    <button class="delete" @deletePlant="deletePlant">
        Delete
    </button>
    <button class="water" @updatePlant="updatePlant">
        Water
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
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
    }, 
    mounted() {
      this.plantId = this.$route.params.pid
    }, 
    methods: {
      async deletePlant() {
        const res = await axios.delete(`/plant/${this.plantId}`)
        this.plants = res.data
      },
      async updatePlant() {
        const res = await axios.put(`/plant/${this.plantId}`)
        this.plants = res.data
      }
    }
  }
</script>