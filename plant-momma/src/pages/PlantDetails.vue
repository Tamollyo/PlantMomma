<template>
  <div>
    <PlantCard :key="plant.id" v-for="plant in plants" :image="plant.image" :name="plant.name" :description="plant.description"/>
    <!-- <div>
      <div>
         <h3>Add a Plant</h3>
      </div>
        <div v-on:submit.prevent="createPlant">
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
          <div>
              <input type="submit" class="btn btn-primary" value="Submit"/>
          </div>
        </div> -->
    <!-- </div> -->
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Plant Name</label>
        <input type="text" v-model="name" name="name" placeholder="Enter Your Name" />
      </div>
      <div class="form-control">
      <label>Age</label>
      <input
        type="text"
        v-model="age"
        name="age"
        placeholder="Enter Your Age"
      />
    </div>
    <input type="submit" value="Save Information" class="btn btn-block" />
  </form>
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
      // form : {
      //   name: '',  
      //   description: '', 
      //   sun: '', 
      //   schedule: '', 
      //   maintenance: '', 
      //   image: ''
      // }, 
      // plant: {}
      return: {
        name : '',
        decription: '',
      }
    }),
    components: {
      PlantCard, 
    }, 
    mounted() {
      this.getPlantsByCategoryId()
      this.createPlant()
    },
    methods: {
      async getPlantsByCategoryId() {
        const cid = this.$route.params.cid
        const res = await axios.get(`${BASE_URL}/category/${cid}/plant`)
        console.log(res)
        this.plants = res.data
      },
      // async createPlant() {
      //     const res = await axios.post(`${BASE_URL}/plant`)
      //     console.log(res)
      //     this.plants = res
      //   }
      onSubmit(e){
                e.preventDefault()
                if(!this.name){
                    alert('Please Add a Name')
                    return
                }
                const NewPlant = {
                    id: Math.floor(Math.random() * 100000),
                    name : this.name,
                    age : this.decription,
                }
                this.$emit('PlantDetails', newPlant)
                this.name = ' ',
                this.decription = ' '
            }
      }
    }
</script>