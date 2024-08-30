<script>
import TimeHeader from '@/components/TimeHeader.vue'
import RegisterList from '@/components/RegisterList.vue'

export default {
  components: {
    TimeHeader,
    RegisterList
  },

  data() {
    return {
      test: [
        {
          timestamp: 1630512000000,
          portion: 1
        },
        {
          timestamp: 1630512000000,
          portion: 2
        },
        {
          timestamp: 1630512000000,
          portion: 3
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <TimeHeader />
    <RegisterList :list="test" />
  </div>
</template>
