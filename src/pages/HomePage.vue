<template>
  <div class="home">
    <CategoryCard :key="category.id" v-for="category in categories" :image="category.image" :name="category.name" :description="category.description" :weather="category.weather" @click="selectCategory(category._id)" />
  </div>
</template>

<script>
  import axios from 'axios'
  import CategoryCard from '../components/CategoryCard.vue'
  const BASE_URL = 'http://localhost:3001/api'

  export default {
    name: 'HomePage',
    data: () => ({
      categories: []
    }),
    components: {
      CategoryCard,
    },
    mounted() {
      this.getCategory()
    },
    methods: {
      async getCategory() {
        const res = await axios.get(`${BASE_URL}/category`)
        console.log(res)
        this.categories = res.data
      },
      selectCategory(cid) {
        console.log(cid, "CID")
        this.$router.push(`/category/${cid}`)
      }
    }
  }
</script>

<style>

.home {
  display: flex;
  justify-content: center;
  margin: 15px;
}
</style>