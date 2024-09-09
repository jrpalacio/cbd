<script setup>
import { LANG, DATE_OPTIONS, TIME_OPTIONS } from '../constants/date_config'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'

import { useRoute, useRouter } from 'vue-router'
import { useCbdStore } from '../stores/cbd'

import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import marihuana from '@/assets/marihuana.png'
import { ref } from 'vue'
import CbdModal from '@/components/CbdModal.vue'

const route = useRoute()
const router = useRouter()

const cbd = useCbdStore()
const { getItemById, removeTime, updateItem } = cbd

const item = getItemById(route.params.id)

let date = ''
let time = ''
if (item !== -1) {
  date = new Date(item.timestamp).toLocaleDateString(LANG, DATE_OPTIONS)
  time = new Date(item.timestamp).toLocaleTimeString(LANG, TIME_OPTIONS)
}
const portion = ref(item.portion)
const showModalDetail = ref(false)

function handlePlusPortion() {
  portion.value += 1
}
function handleMinusPortion() {
  if (portion.value > 1) {
    portion.value -= 1
  }
}
function handleDelete() {
  removeTime(route.params.id)
  router.push('/')
}
function handleCloseModalDetail() {
  showModalDetail.value = false
}
function handleShowModalDetail() {
  showModalDetail.value = true
}
function handleUpdateItem({ id, portion }) {
  updateItem({ id, portion })
  showModalDetail.value = false
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
          <i><small>Utiliza los controles para actulizar la porsión de dosis registrada.</small></i>
        </p>
        <div class="contol--buttons">
          <button @click="handleMinusPortion">
            <IconMinus />
          </button>
          <p>
            <span>{{ portion }}</span>
            <strong>
              <template v-if="portion > 1">gotas</template>
              <template v-else>gota</template>
            </strong>
          </p>
          <button @click="handlePlusPortion">
            <IconPlus />
          </button>
        </div>
        <button type="button" class="button--detail" @click="handleShowModalDetail">
          Actualizar dosis
        </button>
        <CbdModal :show="showModalDetail" @close="handleCloseModalDetail">
          <template #header>Actulizar dosis</template>
          <template #body>
            <p class="modal--descripton">
              <i
                >La dosis inicial fue de {{ item.portion }}
                {{ item.portion > 1 ? 'gotas' : 'gota' }} y la actual es de {{ portion }}
                {{ portion > 1 ? 'gotas' : 'gota' }}.</i
              >
              <strong> ¿Quieres actualizar la dosis de CBD registrada? </strong>
            </p>
            <button class="button--modal" @click="handleUpdateItem({ id: item.id, portion })">
              Actualizar dosis
            </button>
          </template>
        </CbdModal>
      </article>
    </template>
  </section>
</template>

<style scoped>
.button--detail {
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
  padding: 0rem 1.4rem;
  /* border-bottom: 1px solid #e0e0e035;
  background-color: #ec7357; 
  border-radius: 28px;*/
}

.header--title {
  margin-top: 1.3rem;

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
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
  padding: 3rem;

  p {
    & span {
      font-size: 1.5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & button {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #242424;

    background-color: rgba(255, 255, 0, 0.091);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #ec7357;
    }
  }
}
.content--portion {
  padding: 1.6rem;
}
</style>
