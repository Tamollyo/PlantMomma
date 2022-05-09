<template>
  <div>
    <div @click="selectPlants(id)">
      <h1>{{name}}</h1>
      {{description}}
      {{alive}}
      <img :src="image" :alt="name">
    </div>
    <button class="delete" @click="onDelete">
        Delete
    </button>
    <button class="water" @click="onUpdate">
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
      id: String,
      name: String,
      description: String,
      sun: String,
      schedule: String,
      maintenance: String,
      image: String,
      alive: String, 
    }, 
    methods: {
      async onDelete(e) {
        e.preventDefault()
        const res = await axios.delete(`${BASE_URL}/plant/${this.id}`)
        console.log(res)
        this.$emit('deletePlant')
      },
      async onUpdate(e) {
        e.preventDefault()
        const res = await axios.put(`${BASE_URL}/plant/${this.id}`, {alive:'Alive'})
        console.log(res)
        this.$emit('updatePlant')
      },
      selectPlants(id) {
        this.$router.push(`/plant/${id}`)
      },
    }
  }
</script>