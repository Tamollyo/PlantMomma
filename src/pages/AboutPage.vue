<template>
  <div class="about">
    <div class="detail">
      <h1 class="title">About</h1>
      <div class="about-detail">
        <h1>Welcome to the plant app for plant lovers and plant killers. </h1>
        <h4>Let's get gardening. Jump into the plants page, decide the category and then add to the plant list. You can also add to the task list to make sure people know what to do with their plants.</h4>
        <h4>You can also record which plants you've killed! Use the alive button to update it's status. Then if you decide you hate the plant, simply click delete.</h4>
      </div>
        <p>This APP was made using a MEVN stack.</p>
        <a href="https://github.com/Tamollyo/PlantMomma">GitHub FrontEnd Repository</a>
        <a href="https://github.com/Tamollyo/PlantMommaBackend">GitHub BackEnd Repository</a>
      </div>
    <div>
      <h2>Author's Contact</h2>
      <a href="https://www.linkedin.com/in/marie-obermeier-6b6b03158/">LinkedIn</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage'
  }
</script>

<style>

.about {
  margin: 5%;
  font-family: 'Square Peg', cursive;  
  color: antiquewhite;
  width: 55%;
  padding-bottom: 100px;
}

p {
  font-size: 1.75vw;
}

h2 {
  font-size: 2.75vw;
}  

h4 {
  font-size: 2vw;
}  

.title{
  font-size: 3vw;
}

a {
  text-decoration: none;
  color: #C9D98F;
  font-size: 2vw;
  margin: 10px; 
}

a:hover {
  color: #688C4F;
}

.detail {
  margin: 30px 0;
}

.about-detail {
    margin: 10px 0;
}
</style>
