import { format } from '@formkit/tempo'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
  const lang = 'es'
  const t = new Date()
  const fecha = ref(format(t, 'YYYY-MM-DD', lang))

  function setFecha(date) {
    fecha.value = date
  }

  return {
    fecha,
    setFecha
  }
})
