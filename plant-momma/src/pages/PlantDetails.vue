<template>
  <div>
    <div>
        <h3>Add a Plant</h3>
        <PlantForm @createPlant="createPlant" :categoryId="categoryId"/>
    </div>
    <PlantCard :key="plant.id" v-for="plant in plants" :image="plant.image" :name="plant.name" :description="plant.description" :alive="plant.alive" @deletePlant="deletePlant" @updatePlant="updatePlant"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  import PlantForm from '../components/PlantForm.vue'

  const BASE_URL = 'http://localhost:3001/api'

  export default {
    name: 'PlantDetails',
    data: () => ({
      plants: [], 
      categoryId: ''
    }),
    components: {
      PlantCard, 
      PlantForm
    }, 
    mounted() {
      this.categoryId = this.$route.params.cid
      this.getPlantsByCategoryId()
    },
    methods: {
      async getPlantsByCategoryId() {
        const res = await axios.get(`${BASE_URL}/category/${this.categoryId}/plant`)
        console.log(res)
        this.plants = res.data
      },
      createPlant() {
        this.getPlantsByCategoryId()
      },
      deletePlant() {
        this.getPlantsByCategoryId()
      },
      updatePlant() {
        this.getPlantsByCategoryId()
      }
      }
    }
</script>

<style>
  img {
  width: 20%; 
  }
</style>