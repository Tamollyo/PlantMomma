<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view header="Plant App"></router-view>
    </main>
    <footer>
      <div>
        <a class="logo" href="/"><img src="https://i.imgur.com/vIGKOv9.png" alt="logo"></a>
      </div>
    </footer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>

<style>
.logo{
  background-color: none;
  position: fixed;
  bottom: 0; 
}

.log img {
  width: 60%; 
}

</style>