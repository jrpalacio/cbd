<script setup>
import { timestampToDateTime } from '../utils/date_operations'
import DropLabel from './DropLabel.vue'
import IconMinus from './icons/IconMinus.vue'
import IconPlus from './icons/IconPlus.vue'

import { useCbdStore } from '@/stores/cbd'

const cbd = useCbdStore()
const { increment, decrement } = cbd

defineProps({
  timestamp: {
    type: Number,
    required: true
  },
  portion: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <article class="drop--content">
    <button class="button--control" type="button" @click="decrement">
      <IconMinus />
    </button>

    <div class="info">
      <h3>Dosis de CBD</h3>
      <p>
        <DropLabel :portion /> |
        {{ timestampToDateTime(timestamp) }}
      </p>
    </div>
    <button class="button--control" type="button" @click="increment">
      <IconPlus />
    </button>
  </article>
</template>

<style scoped>
h3 {
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.013rem;
}
p {
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.019rem;
}
.button--control {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
}
.button--control:hover {
  background-color: #ec7357;
  border-radius: 50%;
}
.drop--content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.9rem 0;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
