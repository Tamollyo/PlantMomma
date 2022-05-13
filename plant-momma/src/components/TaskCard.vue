<template>
  <div>
    <div>
      <h1>{{tag}}</h1>
    </div>
    <div>
      {{description}}
    </div>
    <div>
      {{ schedule }}
    </div>
    <button class="delete" @click="onDelete">
        Delete
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  const BASE_URL = 'http://localhost:3001/api'
  
  export default {
    name: 'TaskCard',
    props: {
      tag: String,
      description: String,
      schedule: String,
    }, 
    methods: {
      async onDelete(e) {
        e.preventDefault()
        const res = await axios.delete(`${BASE_URL}/plant/${this.id}`)
        console.log(res)
        this.$emit('deletePlant')
      }
    }
  }
</script>