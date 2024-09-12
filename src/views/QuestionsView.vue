<script setup>
import { ref } from 'vue'
import quest from '../api/questions.json'
const questions = ref(quest.questions)
</script>

<template>
  <div>
    <h2>Preguntas frecuentes sobre el CBD</h2>
  </div>

  <ul>
    <li v-for="question in questions" :key="question.id">
      <p class="question">{{ question.question }}</p>
      <p>{{ question.answer }}</p>
    </li>
  </ul>
</template>

<style scoped>
.question {
  font-weight: bold;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
li {
  list-style: none;
}
</style>
