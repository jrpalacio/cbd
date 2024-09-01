<script>
import TimeHeader from '@/components/TimeHeader.vue'
import CbdList from '@/components/CbdList.vue'

export default {
  components: {
    TimeHeader,
    CbdList
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
    <CbdList :cbdRegisterList="test" />
  </div>
</template>
