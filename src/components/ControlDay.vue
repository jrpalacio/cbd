<script setup>
import { format, addDay, parse } from '@formkit/tempo'
import IconCaretleft from './icons/IconCaretleft.vue'
import IconCaretright from './icons/IconCaretright.vue'
import { useDateStore } from '@/stores/date'
import { ref, computed, onMounted, watch } from 'vue'
import { useCbdStore } from '@/stores/cbd'

const f = useDateStore()
const { setFecha } = f

const lang = 'es'
const currentDate = ref(format(new Date(), 'YYYY-MM-DD', lang))

const cbd = useCbdStore()
const { setTimeList, getDataByDate } = cbd

const list = ref([])
onMounted(() => {
  const now = new Date().toLocaleDateString()
  list.value = getDataByDate(now)
  setTimeList(list.value)
})

watch(currentDate, (newDate) => {
  list.value = getDataByDate(parse(newDate, 'YYYY-MM-DD', lang))
  setTimeList(list.value)
})

const labelLongDate = computed(() => {
  return format(currentDate.value, { date: 'full' })
})

function previousDay() {
  const previous = addDay(currentDate.value, -1)
  currentDate.value = format(previous, 'YYYY-MM-DD', lang)
  setFecha(currentDate.value)
}
function nextDay() {
  const next = addDay(currentDate.value, 1)
  currentDate.value = format(next, 'YYYY-MM-DD', lang)
  setFecha(currentDate.value)
}
</script>

<template>
  <nav class="navigation--day">
    <button @click="previousDay"><IconCaretleft /></button>
    <span>{{ labelLongDate }}</span>
    <button @click="nextDay"><IconCaretright /></button>
  </nav>
</template>

<style scoped>
.navigation--day {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    & svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #ec7357;
    }
  }
}
</style>
