<template>
  <div>
    <h2>User Information</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Weight: {{ weight }}</p>
    <p>Gender: {{ gender }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      age: 30,
      weight: 70,
      gender: 'Male'
    }
  }
}
</script>
