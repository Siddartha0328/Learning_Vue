<script setup>
defineProps({
    name: String,
    skills: Array,
    fact: String
})
</script>

<template>
  <div class="day-01">
    <div class="card">
      <h1>{{ name }}</h1>
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
      <p class="fact">Fun Fact: {{ fact }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 350px;
  background: #1e293b;
  color: white;
  padding: 25px;
  border-radius: 15px;
  /* margin: 100px auto; */
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
}

.dark{
  .card{
    background-color:rgb(68, 83, 38)
  }
}

h1 {
  color: #22c55e;
}

h2 {
  margin-top: 20px;
  color: #38bdf8;
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

.fact {
  margin-top: 20px;
  color: #facc15;
}
</style>
