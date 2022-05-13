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

@keyframes jiggle {
  0%   {transform: rotate(0deg) scale(1);}
  25%  {transform: rotate(20deg) scale(1);}
  50%  {transform: rotate(0deg) scale(1);}
  75%  {transform: rotate(-20deg) scale(1);}
  100% {transform: rotate(0deg) scale(1);}
}

img:hover{
  position: relative;
  animation: jiggle 3s infinite;
}

</style>