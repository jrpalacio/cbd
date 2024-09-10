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

  function setTimeList(times) {
    timeList.value = times
  }

  function addTimeLocalStorage({ id, portion, timestamp }) {
    // Save newTime to local storage
    const storedTimes = JSON.parse(localStorage.getItem('times')) || []
    storedTimes.push({ id, portion, timestamp })
    localStorage.setItem('times', JSON.stringify(storedTimes))
  }

  function addTime() {
    const id = generateUniqueId()

    timeList.value.push({
      id,
      portion: portion.value,
      timestamp: timestamp.value
    })

    addTimeLocalStorage({ id, portion: portion.value, timestamp: timestamp.value })

    portion.value = 1
    timestamp.value = 0
    showModal.value = false
  }

  function getStoredTimes() {
    const storedTimes = JSON.parse(localStorage.getItem('times')) || []
    const today = new Date().toLocaleDateString()
    return storedTimes.filter((time) => {
      const timeDate = new Date(time.timestamp).toLocaleDateString()
      return timeDate === today
    })
  }

  function getTimesByDay(day) {
    const storedTimes = JSON.parse(localStorage.getItem('times')) || []
    return storedTimes.filter((time) => {
      const timeDate = new Date(time.timestamp).toLocaleDateString()
      return timeDate === day
    })
  }
  function getDataByDate(date) {
    const storedTimes = JSON.parse(localStorage.getItem('times')) || []
    return storedTimes.filter((time) => {
      const timeDate = new Date(time.timestamp).toLocaleDateString()
      return timeDate === date
    })
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

  function removeTimeLocalStorage(id) {
    const storedTimes = JSON.parse(localStorage.getItem('times')) || []
    const index = storedTimes.findIndex((time) => time.id === id)
    if (index !== -1) {
      storedTimes.splice(index, 1)
      localStorage.setItem('times', JSON.stringify(storedTimes))
    }
  }

  function removeTime(id) {
    const index = timeList.value.findIndex((time) => time.id === id)
    if (index !== -1) {
      timeList.value.splice(index, 1)
      removeTimeLocalStorage(id)
    }
  }

  function updateItemLocalStorage({ id, portion }) {
    const storedTimes = JSON.parse(localStorage.getItem('times')) || []
    const index = storedTimes.findIndex((time) => time.id === id)
    if (index !== -1) {
      storedTimes[index].portion = portion
      localStorage.setItem('times', JSON.stringify(storedTimes))
    }
  }

  function updateItem({ id, portion }) {
    const index = timeList.value.findIndex((time) => time.id === id)
    if (index !== -1) {
      timeList.value[index].portion = portion
      // timeList.value[index].timestamp = timestamp.value
      updateItemLocalStorage({ id, portion })
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
    updateItem,
    getStoredTimes,
    getTimesByDay,
    getDataByDate,
    setTimeList
  }
})
