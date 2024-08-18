<template>
  <div>
    <h1>Preguntas frecuentes sobre el CBD</h1>
    <ul>
      <li v-for="question in questions" :key="question.id">
        <h3>{{ question.title }}</h3>
        <p>{{ question.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 1,
          title: '¿Qué es el CBD?',
          answer:
            'El CBD es un compuesto químico presente en la planta de cannabis que se utiliza con fines medicinales y terapéuticos.'
        },
        {
          id: 2,
          title: '¿Cuáles son los beneficios del CBD?',
          answer:
            'El CBD se ha utilizado para aliviar el dolor, reducir la ansiedad, mejorar el sueño y tratar ciertos trastornos neurológicos, entre otros beneficios potenciales.'
        }
        // Agrega más preguntas y respuestas aquí
      ]
    }
  }
}
</script>

<style scoped>
/* Estilos CSS específicos para este componente */
</style>
