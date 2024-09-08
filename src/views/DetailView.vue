<script setup>
import { LANG, DATE_OPTIONS, TIME_OPTIONS } from '../constants/date_config'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'

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
let date = ''
let time = ''
if (item !== -1) {
  date = new Date(item.timestamp).toLocaleDateString(LANG, DATE_OPTIONS)
  time = new Date(item.timestamp).toLocaleTimeString(LANG, TIME_OPTIONS)
}

function handleDelete() {
  removeTime(route.params.id)
  router.push('/')
}
</script>

<template>
  <section class="section">
    <template v-if="item === -1">
      <p class="message--error">
        🚨 <strong>Ocurrio un problema al buscar la toma de cbd seleccionada.</strong> Por favor,
        <strong>regresa a la página principal</strong>
        <router-link :to="'/'"> presionando aquí </router-link> y vuelve a intentarlo.
      </p>
    </template>
    <template v-else>
      <header className="detail">
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
        <!--  <p>Observa el detalle del registro</p> -->
        <div className="space--between">
          <div className="flex--horizontal">
            <CalendarMonth />
            <p style="margin-left: 0.5rem">{{ date }}</p>
          </div>
          <p className="time">{{ time }}</p>
        </div>
      </header>
      <article class="content--portion">
        <h3>Dosis registrada</h3>
        <p>
          <small>Utiliza los controles para actulizar la porsión de dosis registrada.</small>
        </p>
        <div class="contol--buttons">
          <button>
            <IconMinus />
          </button>
          <p>
            {{ item.portion }}
            <template v-if="item.portion > 1">gotas</template>
            <template v-else>gota</template>
          </p>
          <button>
            <IconPlus />
          </button>
        </div>
        <button>Actualizar dosis</button>
      </article>
    </template>
  </section>
</template>

<style scoped>
.message--error {
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 16px;
}
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
  padding: 2rem 1.4rem;
  border-bottom: 1px solid #e0e0e035;
  background-color: #ec7357;
  border-radius: 28px;
}

.header--title {
  margin: 0.2rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & img {
    width: 1.7rem;
    height: 1.7rem;
  }
}
.time {
  color: #ec7357;
  background-color: #ffffff;
  border-radius: 25px;
  padding-inline: 0.5rem;
  font-size: 0.9rem;
}
.contol--buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  & button {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #f8d7da;
    }
  }
}
.content--portion {
  padding: 1.6rem;
}
</style>
