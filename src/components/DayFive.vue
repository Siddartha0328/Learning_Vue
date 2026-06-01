<script setup>
const user = {name:'Siddu', age:22, city:'SKHT'}
</script>

<template>
  <span v-for="n in 5" :key="n">★</span>
  <ul>
    <li v-for="(value, key, index) in user" :key="key">
      {{ index + 1 }}. {{ key }}: {{ value }}
    </li>
  </ul>
</template>

<style scoped>
</style>
