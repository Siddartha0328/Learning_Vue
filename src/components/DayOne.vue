<script setup>
const developer = 'Siddartha'
const role = 'Future Vue.js Engineer'
</script>

<template>
  <main class="container">
    <h1>Welcome, {{ developer }}</h1>
    <p>Today I begin my journey as a {{ role }}.</p>
  </main>
</template>

<style scoped>
.container {
  font-family: system-ui, sans-serif;
  text-align: center;
  padding: 4rem;
}
h1 { color: #42b883; }
</style>
