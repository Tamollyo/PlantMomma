<template>
  <div>
    <div @click="selectPlants(pid)">
      <h1>{{name}}</h1>
      {{description}}
      {{alive}}
      <img :src="image" :alt="name">
    </div>
    <button class="delete" @delete="onDelete">
        Delete
    </button>
    <button class="water" @update="onUpdate">
        Alive?
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  const BASE_URL = 'http://localhost:3001/api'

  export default {
    name: 'PlantCard',
    data: () => ({
      plantId: ''
    }),
    props: {
      name: String,
      description: String,
      sun: String,
      schedule: String,
      maintenance: String,
      image: String,
      alive: String, 
    }, 
    mounted() {
      this.pid = this.$route.params.pid
    },
    methods: {
      async onDelete(e) {
        e.preventDefault()
        const res = await axios.delete(`${BASE_URL}/plant/${this.pid}`)
        console.log(res)
        this.$emit('deletePlant')
      },
      async onUpdate(e) {
        e.preventDefault()
        const res = await axios.put(`${BASE_URL}/plant/${this.pid}`, {alive:'Alive'})
        console.log(res)
        this.$emit('updatePlant')
      },
      selectPlants(pid) {
        this.$router.push(`/plant/${pid}`)
      },
    }
  }
</script>