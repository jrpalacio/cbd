<script setup>
import { ref, watch } from 'vue'
import quest from '../api/questions.json'
import IconSearch from '@/components/icons/IconSearch.vue'

const questions = ref(quest.questions)
const seletedQuestion = ref('')
const selectedAnswer = ref('')
watch(
  () => seletedQuestion.value,
  (currentValue) => {
    if (currentValue === '') {
      selectedAnswer.value = ''
    }
    if (currentValue.includes('¿') && currentValue.includes('?')) {
      const question = questions.value.find((q) => q.question === currentValue)
      if (question) {
        selectedAnswer.value = question
      } else {
        selectedAnswer.value = 'No se ha encontrado respuesta a tu pregunta'
      }
    }
  }
)
</script>

<template>
  <div>
    <div>
      <h1 class="title">Preguntas típicas del CBD</h1>
    </div>
    <label class="search--input">
      <IconSearch />
      <input
        type="search"
        list="questions"
        placeholder="Introduce aquí tu pregunta sobre CBD"
        v-model="seletedQuestion"
      />
    </label>
    <datalist id="questions">
      <option v-for="question in questions" :key="question.id" :value="question.question"></option>
    </datalist>
    <article>
      <h2>{{ selectedAnswer.question }}</h2>
      <p>{{ selectedAnswer.answer }}</p>
    </article>
  </div>
</template>

<style scoped>
.title {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
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
.search--input {
  margin: 1.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  & input {
    border-radius: 16px;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 0;
  }
}
</style>
