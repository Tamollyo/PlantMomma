<template>
  <div class="plant-card">
    <div class="plant-details" @click="selectPlants(id)">
      <h1>{{name}}</h1>
      <p>
        {{description}}
      </p>
      <h2>
      {{alive}}
      </h2>
      <img class="plant-img" :src="image" :alt="name">
    </div>
    <button class="delete" @click="onDelete">
        Delete
    </button>
    <button class="water" @click="onUpdate">
        Alive?
    </button>
    <button class="water" @click="onUpdateAgain">
        Dead?
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  const BASE_URL = 'https://plantmommabackend.herokuapp.com/api'

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
      async onUpdateAgain(e) {
        e.preventDefault()
        const res = await axios.put(`${BASE_URL}/plant/${this.id}`, {alive:'Dead'})
        console.log(res)
        this.$emit('updatePlantAgain')
      },
      selectPlants(id) {
        this.$router.push(`/plant/${id}`)
      },
    }
  }
</script>

<style>

.plant-card{
  margin: 10px; 
}

.plant-img{
  border-radius: 50%;
  width:  150px;
  height: 150px;
  object-fit: cover;
}
</style>