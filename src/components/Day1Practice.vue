<script setup>
import { ref } from 'vue'
import ProfileCard from './ProfileCard.vue'
const developer = 'Siddu'
const role = 'Future Vue.js Engineer'
const skills = ['Reactjs', 'JavaScript', 'Vue']
const users = [
  { id: 1, name: 'Siddu' },
  { id: 2, name: 'Sharath' },
  { id: 3, name: 'Charan'},
  { id: 4, name: 'Vishnu'},
  { id: 5, name: 'Sai Geetha'},
  { id: 6, name: 'Akhil'},
]
const message = ref('')
const count = ref(0)
const isDisabled = ref(false)

const avatar = ref(
  'https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
)
function incr() {
  count.value++
}
function desc() {
  count.value--
}
</script>

<template>
  <div class="contain">
    <h1>Welcome, {{ developer }}</h1>
    <!--Text Interpolation: using content from script and displaying in template-->
    <p>Today I begin my journey as a {{ role }}.</p>
    <div class="cards">
      <div>
        <ProfileCard
          :name="developer"
          :skills="skills"
          fact="I enjoy building modern frontend dashboards."
        />
        <!--Wrapping a component in App.vue and giving values dynamically-->
      </div>
      <div>
        <!-- <img v-bind:src="avatar" class="avatar-image"/> -->
        <!--using V-bind-->
        <img :src="avatar" class="avatar-image" />
        <!--using v-bind(shorthand notation)-->
        <div>
          <button @click="desc">-</button>
          <span>{{ count }}</span>
          <button @click="incr">+</button>
          <button :disabled="isDisabled">Submit</button>
          <!-- <button @click="isVisible = !isVisible">Toggle About Me</button> -->
        </div>
      </div>
      <div>
        <h2>Displaying the list using "v-for"</h2>
        <ul>
          <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
      </div>
    </div>
    <input v-model="message" placeholder="Type something" />
    <p>You typed: {{ message }}</p>
  </div>
</template>

<style scoped>

.contain {
  /* background: #ffffff; */
  padding: 25px;
  margin: 0px;
}

h1, h2 {
  color: #22c55e;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

footer {
  background: #333;
  padding: 7px;
  margin-top: 10px;
}

footer p {
  color: #fff;
}

.avatar-image {
  height: auto;
  width: 200px;
}

</style>
