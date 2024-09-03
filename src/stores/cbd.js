import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCbdStore = defineStore('cbd', () => {
  const portion = ref(1)
  const doublePortion = computed(() => portion.value * 2)

  function increment() {
    portion.value++
  }
  function decrement() {
    if (portion.value > 1) {
      portion.value--
    }
  }

  return { portion, doublePortion, increment, decrement }
})
