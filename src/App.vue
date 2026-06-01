<script setup>
import {useDarkMode} from './composables/useDarkMode'
import Day1Practice from './components/Day1Practice.vue'
import DayOne from './components/DayOne.vue'
import DayTwo from './components/DayTwo.vue'
import ShoppingMart from './components/ShoppingMart.vue'
import SearchBox from './components/SearchBox.vue'
import Day4Tasks from './components/Day4Tasks.vue'
import DayFive from './components/DayFive.vue'
import AnimatedTaskBoard from './components/AnimatedTaskBoard.vue'
const today = new Date().toLocaleDateString('en-GB')
const {isDark} = useDarkMode()
</script>

<template>
  <div :class="isDark ? 'dark' : 'light'">
    <button @click="isDark = !isDark">Toggle Theme</button>
    <div>
      <DayOne />
      <Day1Practice />
    </div>
    <div class="mix-container">
      <ShoppingMart />
      <DayTwo />
      <SearchBox />
    </div>
    <div>
      <Day4Tasks/>
    </div>
    <DayFive/>
    <AnimatedTaskBoard/>
    <footer>
      <p>Today's Date: {{ today }}</p>
    </footer>
  </div>
</template>

<style scoped>
.mix-container {
  display: flex;
}
.dark {
  background: black;
  color: white;
  /* min-height: 100vh; */
  .card {
    background-color: rgb(16, 61, 61);
  }
  .shop {
    background-color: #fff;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    color: #4f0d0d;
  }
  footer {
    background-color: rgb(53, 52, 52);
  }
}

.light {
  background: white;
  color: black;
  /* min-height: 100vh; */
  .card {
    background-color: powderblue;
  }
  .shop {
    background-color: #000;
    color: #fff;
    box-shadow: 0 0 20px rgba(0, 255, 94, 0.5);
  }
  footer {
    background-color: rgb(53, 52, 51);
  }
}

footer {
  color: #fff;
  text-align: center;
  border-radius: 15px 15px 0px 0px;
  padding: 6px;
}
</style>
