<script>
import { LANG, OPTIONS } from '@/constants/date_config'

export default {
  data() {
    return {
      longDateString: new Date().toLocaleDateString(LANG, OPTIONS),
      time: ''
    }
  },
  mounted() {
    this.getCurrentDateTime()
    setInterval(this.getCurrentDateTime, 1000)
  },

  methods: {
    getCurrentDateTime() {
      const now = new Date()
      this.time = now.toLocaleTimeString(LANG)
    }
  }
}
</script>

<template>
  <header class="header__time">
    <p>{{ longDateString }}</p>
    <h1>{{ time }}</h1>
  </header>
</template>

<style scoped>
.header__time {
  text-align: center;
  padding: 2rem;
}
</style>
