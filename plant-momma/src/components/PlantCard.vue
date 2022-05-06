<template>
  <div>
    <div>
      <h1>{{name}}</h1>
    </div>
    <div>
      {{description}}
    </div>
    <div>
      <img :src="image" :alt="name">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlantCard',
    props: {
      name: String,
      description: String,
      sun: String,
      schedule: String,
      maintenance: String,
      image: String,
    },
  }
</script>