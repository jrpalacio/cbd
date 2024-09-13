<script setup>
import { LANG, DATE_OPTIONS, TIME_OPTIONS } from '../constants/date_config'
import { ref } from 'vue'
import { timestampToDateTime } from '../utils/date_operations'
import IcoMarihuana from '@/assets/marihuana.png'
import IconDelete from './icons/IconDelete.vue'
import DropLabel from './DropLabel.vue'
import CbdModal from './CbdModal.vue'
import { useRouter } from 'vue-router'
import { useCbdStore } from '../stores/cbd'
import canabis from '@/assets/canabis.webp'

defineProps({
  cbdRegisterList: {
    type: Array,
    required: true
  }
})

const router = useRouter()
const cbd = useCbdStore()
const { removeTime, getItemById } = cbd
const showModalDelete = ref(false)
const itemSelected = ref(null)
const date = ref('')
const time = ref('')

function goPage(id) {
  router.push({ name: 'drop-detail', params: { id } })
}

function handleShowModal(id) {
  showModalDelete.value = true
  itemSelected.value = getItemById(id)
  date.value = new Date(itemSelected.value.timestamp).toLocaleDateString(LANG, DATE_OPTIONS)
  time.value = new Date(itemSelected.value.timestamp).toLocaleTimeString(LANG, TIME_OPTIONS)
}

function handleCloseModal() {
  showModalDelete.value = false
}

function handleItemDelete(id) {
  removeTime(id)
  showModalDelete.value = false
}
</script>

<template>
  <section class="section">
    <div class="content--button space--between">
      <h2>Toma diaria de CBD</h2>
      <slot name="button"></slot>
    </div>
    <hr />
    <template v-if="cbdRegisterList.length === 0">
      <figure class="figure-canabis">
        <img :src="canabis" alt="canavis" />
        <p><i>No hay registro de dosis </i></p>
      </figure>
    </template>
    <template v-else>
      <ul class="content--list">
        <li v-for="(itemList, index) in cbdRegisterList" v-bind:key="index">
          <a class="horizontal--direction" @click="goPage(itemList.id)">
            <figure class="image">
              <img :src="IcoMarihuana" alt="Marihuana" />
            </figure>

            <div class="info">
              <h3>Dosis de CBD</h3>
              <p>
                <DropLabel :portion="itemList.portion" /> |
                {{ timestampToDateTime(itemList.timestamp) }}
              </p>
            </div>
          </a>
          <IconDelete @click="handleShowModal(itemList.id)" />
          <CbdModal :show="showModalDelete" @close="handleCloseModal">
            <template #header>Eliminar toma</template>
            <template #body>
              <p class="modal--descripton">
                <i>Esta acción no podrá deshacerse</i>
                <strong> ¿Quieres eliminar la toma del {{ date }} a las {{ time }}? </strong>
              </p>
              <button type="button" class="button--modal" @click="handleItemDelete(itemList.id)">
                Si, quiero eliminarla
              </button>
            </template>
          </CbdModal>
        </li>
      </ul>
    </template>
  </section>
</template>

<style scoped>
.figure-canabis {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
a {
  width: 100%;
  display: flex;
  align-items: center;
}
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

li {
  list-style: none;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 18px;
}

hr {
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  background-color: #2d323a;
  width: 100%;
}

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
.modal--descripton {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.019rem;
  margin: 1.2rem 0;
}
.section {
  padding: 0 4rem;
}

.content--button {
  padding: 1rem 0;
}

.space--between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.horizontal--direction {
  display: flex;
  gap: 1rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  border-radius: 18px;
  background-color: rgb(3, 23, 2);

  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
}

.content--list {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
@media (max-width: 800px) {
  .section {
    padding: 0;
  }
}
@media (max-width: 480px) {
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    min-width: 48px;

    & img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
}
</style>
