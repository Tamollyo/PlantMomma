<template>
  <div>
    <button class="fact" @click="plantFact">
      <img src="https://i.imgur.com/cpkvFPW.png" alt="leaf">
      <p>{{ fact.fact}}</p>
    </button>
  </div>
</template>


<script>
const plantFacts = [
  {
    fact:
      "Have you botany plants lately?"
  },
  {
    fact:
      "I’m very frond of you."
  },
  {
    fact: "I beg your garden!?"
  },
  {
    fact: "Scarecrows are always garden their patch."
  },
  {
    fact:
      "I wet my plants."
  },
  {
    fact:
      "Do you have the thyme? I need to get somewhere around tree o’clock."
  },
  {
    fact:
      "I started dating the girl across the street. Honestly, lawn-distance relationships aren’t that hard.",
  },
  {
    fact:
      "Walking barefoot is good for the sole."
  },
  {
    Fact:
      "My leaf blower doesn’t work. It just sucks!"
  },
];

export default {
  name: "FactNote",
  data() {
    return { fact: {} };
  },
  methods: {
    plantFact() {
      const index = Math.floor(Math.random() * plantFacts.length);
      this.fact = plantFacts[index];
    },
  },
};
</script>

<style>
.fact{
  background-color: #467362;
  color: #C9D98F; 
  border: none; 
  display: flex;
  flex-wrap: wrap; 
}

.fact img{
  width: 2%; 
}

.fact:hover{
  background-color: #467362;
  color: #C9D98F; 
  border: none; 
}
</style>