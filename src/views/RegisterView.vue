<script setup>
import { storeToRefs } from 'pinia'

import { useCbdStore } from '@/stores/cbd'
import { useModalStore } from '@/stores/modal'

import TimeHeader from '@/components/TimeHeader.vue'
import CbdList from '@/components/CbdList.vue'
import CbdModal from '@/components/CbdModal.vue'
import DropItem from '@/components/DropItem.vue'
import ControlDay from '@/components/ControlDay.vue'

import IconDropletPlus from '@/components/icons/IconDropletPlus.vue'

const cbd = useCbdStore()
const { portion, timestamp, timeList } = storeToRefs(cbd)
const { addTime } = cbd

const modal = useModalStore()
const { showModal } = storeToRefs(modal)
const { toggleModal } = modal

function handleShowModal() {
  const now = new Date()
  timestamp.value = now.getTime()
  toggleModal(true)
}

function handleCloseModal() {
  portion.value = 1
  timestamp.value = 0
  toggleModal(false)
}
</script>

<template>
  <div>
    <ControlDay />
    <TimeHeader />

    <CbdList :cbdRegisterList="timeList">
      <template #button>
        <button @click="handleShowModal"><IconDropletPlus /></button>
      </template>
    </CbdList>

    <CbdModal :show="showModal" @close="handleCloseModal">
      <template #header>Registrar dosis</template>
      <template #body>
        <DropItem :portion="portion" :timestamp="timestamp" />
        <button class="button--modal" @click="addTime">Agregar</button>
      </template>
    </CbdModal>
  </div>
</template>

<style scoped>
button {
  background-color: #ec7357;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.019rem;
}
button:hover {
  background-color: #f5a69e;
}

.form--content {
  display: flex;
  flex-direction: column;
}
</style>
