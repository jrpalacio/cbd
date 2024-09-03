<script>
import TimeHeader from '@/components/TimeHeader.vue'
import CbdList from '@/components/CbdList.vue'
import CbdModal from '@/components/CbdModal.vue'
import DropItem from '@/components/DropItem.vue'

export default {
  components: {
    TimeHeader,
    CbdList,
    CbdModal,
    DropItem
  },

  data() {
    return {
      showModal: false,
      currentDrop: 2,
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
        },
        {
          timestamp: 1630512000000,
          portion: 4
        },
        {
          timestamp: 1630512000000,
          portion: 5
        },
        {
          timestamp: 1630512000000,
          portion: 6
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <TimeHeader />
    <button id="show-modal" @click="showModal = true">Show Modal</button>

    <CbdModal :show="showModal" @close="showModal = false">
      <template #header>Toma diaria de CBD</template>
      <template #body>
        <DropItem :portion="currentDrop" :timestamp="1630512000000" />
        <button class="button--modal">Agregar</button>
      </template>
    </CbdModal>

    <CbdList :cbdRegisterList="test" />
  </div>
</template>

<style scoped>
.button--modal {
  background-color: #ec7357;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.019rem;
  width: 100%;
}
.form--content {
  display: flex;
  flex-direction: column;
}
</style>
