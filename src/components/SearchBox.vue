<script setup>
import { ref, computed, watch } from 'vue'

const query = ref('')
const results = ref([])
const isLoading = ref(false)
const recentSearches = ref([])

const resultCount = computed(() => results.value.length)
const hasResults = computed(() => resultCount.value > 0)
const showEmptyState = computed(() => query.value.length > 0 && !isLoading.value && !hasResults.value)

let debounceTimer
watch(query, (newQuery) => {
  clearTimeout(debounceTimer)
  if (!newQuery) {
    results.value = []
    return
  }
  isLoading.value = true
  debounceTimer = setTimeout(async () => {
    // simulate API call
    await new Promise(r => setTimeout(r, 400))
    results.value = ['Vue 3', 'Vite', 'Pinia', 'React', 'JavaScript', 'Tailwind', 'Bootstrap'].filter(
      r => r.toLowerCase().includes(newQuery.toLowerCase())
    )
    isLoading.value = false
    if (!recentSearches.value.includes(newQuery)) {
      recentSearches.value.unshift(newQuery)
      recentSearches.value = recentSearches.value.slice(0, 5)
    }
  }, 300)
})

// Persist recent searches
watch(recentSearches, (val) => {
  localStorage.setItem('recent-searches', JSON.stringify(val))
}, { deep: true })
</script>

<template>
  <section class="search">
    <input v-model="query" placeholder="Search..." />
    <p v-if="isLoading">Searching...</p>
    <p v-else-if="hasResults">{{ resultCount }} result(s)</p>
    <p v-if="showEmptyState">No matches for "{{ query }}"</p>

    <ul>
      <li v-for="r in results" :key="r">{{ r }}</li>
    </ul>

    <h4>Recent</h4>
    <ul>
      <li v-for="r in recentSearches" :key="r" @click="query = r">{{ r }}</li>
    </ul>
  </section>
</template>
