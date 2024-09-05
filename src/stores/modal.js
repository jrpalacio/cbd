import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const showModal = ref(false)

  function toggleModal(currentValue) {
    showModal.value = currentValue
  }

  return { showModal, toggleModal }
})
