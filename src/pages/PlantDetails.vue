<template>
  <div class="plant">
    <div class="plant-fact">
        <h3>Add a Plant</h3>
    </div>
    <div>
      <PlantForm @createPlant="createPlant" :categoryId="categoryId"/>
    </div>
    <h2>Plants</h2>
    <div class="plant-card-grid">
    <PlantCard :key="plant.id" v-for="plant in plants" :image="plant.image" :name="plant.name" :description="plant.description" :alive="plant.alive" :id="plant._id" @deletePlant="deletePlant" @updatePlant="updatePlant" @updatePlantAgain="updatePlantAgain"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  import PlantForm from '../components/PlantForm.vue'


  const BASE_URL = 'https://plantmommabackend.herokuapp.com/api'

  export default {
    name: 'PlantDetails',
    data: () => ({
      plants: [], 
      categoryId: ''
    }),
    components: {
      PlantCard, 
      PlantForm, 
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
      },
      updatePlantAgain() {
        this.getPlantsByCategoryId()
      }
      }
    }
</script>

<style>
  
  img {
  width: 20%; 
  }

  .plant {
  font-family: 'Square Peg', cursive;
  color: antiquewhite;
  }

  .plant-card-grid {
    font-family: 'Square Peg', cursive;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px; 
    justify-content: center;
    align-content: center;
    padding-bottom: 200px;
  }

  .plant-fact {
    display: flex;
    flex-wrap: wrap;
  }

  h1 {
    font-size: 45px; 
  }
  h3 {
    font-size: 25px; 
  }
</style>