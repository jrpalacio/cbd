<template>
  <div>
    <h1>{{ currentDate }}</h1>
    <h2>{{ currentTime }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: '',
      currentTime: ''
    }
  },
  mounted() {
    this.getCurrentDateTime()
    setInterval(this.getCurrentDateTime, 1000)
  },
  methods: {
    getCurrentDateTime() {
      const now = new Date()
      this.currentDate = now.toLocaleDateString()
      this.currentTime = now.toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
}

h2 {
  font-size: 18px;
  font-weight: normal;
  color: gray;
}
</style>
