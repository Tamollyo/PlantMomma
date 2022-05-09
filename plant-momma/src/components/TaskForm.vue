<template>
  <div>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Task</label>
        <input type="text" name="tag" :value="tag" @input="onChange"/>
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
      <label>Schedule</label>
      <input
        type="text"
        name="schedule"
        :value="schedule"
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
    name: 'TaskForm',
    props: {
      plantId: String
    }, 
    data: () => ({ 
      tag: "",
      description: "",
      schedule: "",
    }),
    methods: {
      onChange(e){
        console.log("TARGET", e.target.value)
        this[e.target.name] = e.target.value
      },
      async onSubmit(e) {
        e.preventDefault()
        const newTask = { 
          tag: this.tag, 
          description: this.description,
          schedule: this.schedule,
          plant: this.plantId
        }
        console.log(this.plantId, "CATEGORY")
        console.log("NEWPLANT", newTask)
        const res = await axios.post(`${BASE_URL}/task`, newTask)
        console.log(res)
        this.$emit('createTask')
        this.tag = ""
        this.description = ""
        this.schedule =  ""
      }
    }
  }
</script>