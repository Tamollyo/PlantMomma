<template>
  <div>
    <div class="image">
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

<style>
.image {
  display: flex;
  justify-content: center;
  margin: 15px;
}

.image img{
  width: 70%; 
  }
</style>