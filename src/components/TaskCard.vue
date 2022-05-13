<template>
  <div>
    <div>
      <h1>{{tag}}</h1>
    </div>
    <h3>
      {{description}}
    </h3>
    <h3>
      {{ schedule }}
    </h3>
    <button class="delete" @click="onDelete">
        Delete
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  const BASE_URL = 'https://plantmommabackend.herokuapp.com/api'

  export default {
    name: 'TaskCard',
    props: {
      tag: String,
      description: String,
      schedule: String,
      id: String
    }, 
    methods: {
      async onDelete(e) {
        e.preventDefault()
        console.log(this.id)
        const res = await axios.delete(`${BASE_URL}/task/${this.id}`)
        console.log(res)
        this.$emit('deleteTask')
      }
    }
  }
</script>