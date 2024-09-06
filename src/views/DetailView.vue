<script setup>
import { LANG, DATE_OPTIONS, TIME_OPTIONS } from '../constants/date_config'

import { useRoute, useRouter } from 'vue-router'
import { useCbdStore } from '../stores/cbd'

import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import marihuana from '@/assets/marihuana.png'

const route = useRoute()
const router = useRouter()

const cbd = useCbdStore()
const { getItemById, removeTime } = cbd

const item = getItemById(route.params.id)

const date = new Date(item.timestamp).toLocaleDateString(LANG, DATE_OPTIONS)
const time = new Date(item.timestamp).toLocaleTimeString(LANG, TIME_OPTIONS)

const handleDelete = () => {
  removeTime(route.params.id)
  router.push('/')
}
</script>

<template>
  <section class="section">
    <header className="detail ">
      <nav class="space--between">
        <router-link :to="'/'">
          <ArrowLeft />
        </router-link>
        <p>Detalle de la toma</p>
        <IconDelete @click="handleDelete" />
      </nav>
      <div class="header--title">
        <img :src="marihuana" alt="Icono de marihuana" />
        <h2>Toma diaria de CBD</h2>
      </div>
      <p>
        La idea es agregar un texto atractivo para el usuario. Este texto lo obtendremos de la IA,
        debe identificar la hora del consumo de la dosis y apartir de ahí le mencione al usuario los
        beneficios de tomarlo a esa hora.
      </p>
      <div className="space--between">
        <div className="flex--horizontal">
          <CalendarMonth />
          <p style="margin-left: 0.5rem">{{ date }}</p>
        </div>
        <p className="time">{{ time }}</p>
      </div>
    </header>
    <article className="m__top--md">
      <h3>Dosis registrada</h3>
      <div style="display: flex; justify-content: space-between; align-items: center">
        <div className="m__top--sm" style="display: flex; align-items: center; gap: 0.5rem">
          {{ item.portion }}
          <p>Gota</p>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.section {
  /* padding: 0 8rem; */
}
.space--between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.flex--horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail {
  padding: 2rem;
  border-bottom: 1px solid #e0e0e035;
  background-color: #ec7357;
  border-radius: 28px;
}

.header--title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & img {
    width: 2rem;
    height: 2rem;
  }
}
.time {
  color: #ec7357;
  background-color: #ffffff;
  border-radius: 25px;
  padding-inline: 0.5rem;
  font-size: 0.9rem;
}
</style>
