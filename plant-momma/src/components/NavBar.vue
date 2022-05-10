<template>
  <nav>
    <router-link to="/">Plants</router-link>
    <router-link to="/plant">Facts</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');

nav {
  display: flex;
  justify-content: right;
  font-family: 'Square Peg', cursive;
  font-size: 3rem;
}

a { 
  text-decoration: none;
  margin: 0 15px ;
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;
  padding: 16px 0;
  position: relative;
  display: block;
  font-size: 2rem;;
  color: #ecf0f1;
  text-transform: uppercase;
  padding: 4px 0;
  transition: 0.5s;
}

a::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  background: #9FB079;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}

a:hover {
  color: #9FB079;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

</style>
