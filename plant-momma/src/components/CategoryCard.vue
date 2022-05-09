<template>
  <div>
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