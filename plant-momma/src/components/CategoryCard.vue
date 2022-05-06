<template>
  <div>
    <div>
      <h1>{{name}}</h1>
    </div>
    <div>
      {{description}}
      {{weather}}
    </div>
    <div>
      <img :src="image" :alt="name">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CategoryCard',
    props: {
      name: String,
      description: String,
      weather: String,
      image: String
    }
  }
</script>