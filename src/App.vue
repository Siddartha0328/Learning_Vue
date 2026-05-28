<script setup>
const developer = 'Siddu'
const role = 'Future Vue.js Engineer'
</script>

<template>
  <div class="container">
    <h1>Welcome, {{ developer }}</h1>
    <p>Today I begin my journey as a {{ role }}.</p>
  </div>
</template>

<style scoped>
.container {
  font-family: system-ui, sans-serif;
  text-align: center;
  padding: 4rem;
}
h1 {
  color: #42b883;
}
</style>
