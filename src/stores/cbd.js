import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useModalStore } from './modal'

export const useCbdStore = defineStore('cbd', () => {
  const modal = useModalStore()
  const { showModal } = storeToRefs(modal)

  const portion = ref(1)
  const timestamp = ref(0)
  const timeList = ref([])

  function increment() {
    portion.value++
  }

  function decrement() {
    if (portion.value > 1) {
      portion.value--
    }
  }

  function addTime() {
    const id = generateUniqueId()

    timeList.value.push({
      id,
      portion: portion.value,
      timestamp: timestamp.value
    })
    portion.value = 1
    timestamp.value = 0
    showModal.value = false
  }

  function generateUniqueId() {
    let id = Math.random().toString(36).substr(2, 9)
    while (timeList.value.some((time) => time.id === id)) {
      id = Math.random().toString(36).substr(2, 9)
    }
    return id
  }

  function getItemById(id) {
    return timeList.value.find((time) => time.id === id)
  }

  function removeTime(id) {
    const index = timeList.value.findIndex((time) => time.id === id)
    if (index !== -1) {
      timeList.value.splice(index, 1)
    }
  }

  function updateItem({ id, portion }) {
    const index = timeList.value.findIndex((time) => time.id === id)
    if (index !== -1) {
      timeList.value[index].portion = portion
      // timeList.value[index].timestamp = timestamp.value
    }
  }

  return {
    portion,
    timeList,
    timestamp,
    increment,
    decrement,
    addTime,
    getItemById,
    removeTime,
    updateItem
  }
})
