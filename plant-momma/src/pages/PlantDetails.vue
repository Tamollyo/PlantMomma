<template>
  <div>
    <PlantCard :key="plant.id" v-for="plant in plants" :image="plant.image" :name="plant.name" :description="plant.description"/>
    <div>
      <div>
         <h3>Add a Plant</h3>
      </div>
        <div class="field">
          <div>
            <textarea class="textarea" placeholder="Plant Name" v-model="form.name"></textarea>
          </div>
          <div>
            <textarea class="textarea" placeholder="Description" v-model="form.description"></textarea>
          </div>
          <div>
            <textarea class="textarea" placeholder="Sun" v-model="form.sun"></textarea>
          </div>
          <div>
            <textarea class="textarea" placeholder="Schedule" v-model="form.schedule"></textarea>
          </div>
          <div>
            <textarea class="textarea" placeholder="Maintenance" v-model="form.maintenance"></textarea>
          </div>
          <div>
            <textarea class="textarea" placeholder="Image" v-model="form.image"></textarea>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  const BASE_URL = 'http://localhost:3001/api'

  export default {
    name: 'PlantDetails',
    data: () => ({
      plants: [], 
      form : {
        name: '',  
        description: '', 
        sun: '', 
        schedule: '', 
        maintenance: '', 
        image: ''
      }
    }),
    components: {
      PlantCard
    }, 
    mounted() {
      this.getPlantsByCategoryId()
    },
    methods: {
      async getPlantsByCategoryId() {
        const cid = this.$route.params.cid
        const res = await axios.get(`${BASE_URL}/category/${cid}/plant`)
        console.log(res)
        this.plants = res.data
      }
      // async createPlant() {
      //   let res = 
      // }
    }
  }
</script>