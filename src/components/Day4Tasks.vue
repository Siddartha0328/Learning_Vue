<script setup>
import { ref, computed, watch } from 'vue'

/* Exercise 1 -----> Temparature Converter */
const celsius = ref(0)
const fahrenheit = computed({
  get() {
    return ((celsius.value * 9) / 5 + 32).toFixed(1)
  },
  set(value) {
    celsius.value = (((value - 32) * 5) / 9).toFixed(1)
  },
})

/* Exercise 2 ----> Button Click Count*/
const clickCount = ref(0)
function handleClick() {
  clickCount.value++
}

watch(clickCount, (newValue) => {
  console.log('Total Clicks:', newValue)
})

/* Exercise 3 -----> Showing Saved✅*/
const name = ref('')
const saveStatus = ref('')

watch(name, () => {
  saveStatus.value = 'Saving...'
  setTimeout(() => {
    saveStatus.value = 'Saved ✅'
  }, 1000)
})
</script>

<template>
  <div>
    <h1>Vue Watch & Computed Practice</h1>
    <div class="cards">
      <div class="temp-card">
        <h2>🌡️ Temperature Converter</h2>
        <div class="input-group">
          <label>Celsius</label>
          <input type="number" v-model="celsius" />
        </div>
        <div class="input-group">
          <label>Fahrenheit</label>
          <input type="number" v-model="fahrenheit" />
        </div>
      </div>
      <hr />

      <div class="btn-card">
        <h2>Button Click Tracker</h2>
        <button @click="handleClick" class="click-btn">Click Me</button>
        <p class="click-count">
          Total Clicks: <span>{{ clickCount }}</span>
        </p>
      </div>
      <hr />

      <div class="save-card">
        <h2>💾 Save Indicator</h2>
        <input v-model="name" placeholder="Enter your name" class="save-input" />
        <p class="save-status">{{ saveStatus }}</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}

.temp-card,
.btn-card,
.save-card {
  background: #f8fafc;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08);
}

/* Temp card styling */
.temp-card {
  width: 350px;
  padding: 24px;
  margin: 20px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.temp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.temp-card h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #1e293b;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.input-group label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #475569;
}

.input-group input {
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  transition: all 0.25s ease;
}

.input-group input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
}

.input-group input:hover {
  border-color: #94a3b8;
}

/* Button card styling*/

.btn-card {
  width: 320px;
  padding: 24px;
  margin: 20px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
}

.btn-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.btn-card h2 {
  margin-bottom: 20px;
  color: #1e293b;
  font-size: 1.4rem;
}

.click-btn {
  border: none;
  outline: none;
  padding: 12px 24px;
  border-radius: 10px;
  background: #22c55e;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.click-btn:hover {
  background: #16a34a;
  transform: scale(1.05);
}

.click-btn:active {
  transform: scale(0.95);
}

.click-count {
  margin-top: 20px;
  font-size: 1.1rem;
  color: #475569;
}

.click-count span {
  display: inline-block;
  margin-left: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #dbeafe;
  color: #2563eb;
  font-weight: bold;
}

/*Saving */
.save-card {
  width: 350px;
  padding: 24px;
  margin: 20px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.save-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.save-card h2 {
  margin-bottom: 20px;
  color: #1e293b;
}

.save-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.save-input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
}

.save-status {
  margin-top: 16px;
  font-weight: 600;
  min-height: 24px;
  color: #2563eb;
}

/* Dark mode styling */
.dark .temp-card,
.dark .btn-card,
.dark .save-card {
  background: #1e293b;
  color: #f8fafc;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.25);
}

.dark .temp-card h2,
.dark .btn-card h2,
.dark .save-card h2 {
  color: #22c55e;
}

.dark .temp-card input,
.dark .save-card input {
  background: #334155;
  color: white;
  border: 2px solid #475569;
}

.dark .temp-card input::placeholder,
.dark .save-card input::placeholder {
  color: #94a3b8;
}

.dark .temp-card input:focus,
.dark .save-card input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
}

.dark .temp-card label {
  color: #cbd5e1;
}

.dark .btn-card .click-btn {
  background: #22c55e;
  color: white;
}

.dark .btn-card .click-btn:hover {
  background: #16a34a;
}

.dark .click-count {
  color: #cbd5e1;
}

.dark .click-count span {
  background: #14532d;
  color: #86efac;
}
.dark .save-status {
  color: #60a5fa;
}

.dark .saving {
  color: #fbbf24;
}

.dark .saved {
  color: #4ade80;
}

.dark .input-group label {
  color: #cbd5e1;
}

/* Light mode Styling */
.light .temp-card h2,
.light .btn-card h2,
.light .save-card h2 {
  color: #0f172a;
}

.light .temp-card input,
.light .save-card input {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  color: #1e293b;
}

.light .temp-card input:focus,
.light .save-card input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.light .click-btn {
  background: #2563eb;
  color: white;
}

.light .click-btn:hover {
  background: #1d4ed8;
}

.light .click-count span {
  background: #dbeafe;
  color: #1d4ed8;
}

.light .saving {
  color: #d97706;
}

.light .saved {
  color: #16a34a;
}
</style>
