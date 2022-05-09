<template>
  <div>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Plant Name</label>
        <input type="text" name="name" :value="name" @input="onChange"/>
      </div>
      <div class="form-control">
      <label>Description</label>
      <input
        type="text"
        name="description"
        :value="description"
        @input="onChange"
      />
    </div>
    <div class="form-control">
      <label>Sun</label>
      <input
        type="text"
        name="sun"
        :value="sun"
        @input="onChange"
      />
    </div>
    <div class="form-control">
      <label>Schedule</label>
      <input
        type="text"
        name="schedule"
        :value="schedule"
        @input="onChange"
      />
    </div>
    <div class="form-control">
      <label>Maintenance</label>
      <input
        type="text"
        name="maintenance"
        :value="maintenance"
        @input="onChange"
      />
    </div>
    <div class="form-control">
      <label>Image</label>
      <input
        type="text"
        name="image"
        :value="image"
        @input="onChange"
      />
    </div>
    <div class="form-control">
      <label>Alive</label>
      <input
        type="text"
        name="alive"
        :value="alive"
        @input="onChange"
      />
    </div>
    <input type="submit" value="Submit" class="btn btn-block" />
  </form>
  </div>
</template>

<script>
  import axios from "axios"
  const BASE_URL = 'http://localhost:3001/api'

  export default {
    name: 'PlantForm',
    props: {
      categoryId: String
    }, 
    data: () => ({ 
      name: "",
      description: "",
      sun: "",
      schedule: "",
      maintenance: "",
      image: "",
      alive: ""
    }),
    methods: {
      onChange(e){
        console.log("TARGET", e.target.value)
        this[e.target.name] = e.target.value
      },
      async onSubmit(e) {
        e.preventDefault()
        const newPlant = { 
          name: this.name, 
          description: this.description,
          sun: this.sun,
          schedule: this.schedule,
          maintenance: this.maintenance,
          image: this.image,
          alive: this.alive,
          category: this.categoryId
        }
        const res = await axios.post(`${BASE_URL}/plant`, newPlant)
        console.log(res)
        this.$emit('createPlant')
        this.name = ""
        this.description = ""
        this.sun =  ""
        this.schedule =  ""
        this.maintenance = ""
        this.image =  ""
        this.alive = ""
      }
    }
  }
</script>