<script setup>
import { timestampToDateTime } from '../utils/date_operations'
import IcoMarihuana from '@/assets/marihuana.png'
import ChevronRight from './icons/ChevronRight.vue'
import DropLabel from './DropLabel.vue'

defineProps({
  cbdRegisterList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="section">
    <div class="content--button space--between">
      <h2>Historial de tomas</h2>
      <button>Agregar toma</button>
    </div>
    <hr />
    <ul class="content--list">
      <li v-for="(itemList, index) in cbdRegisterList" v-bind:key="index">
        <div class="horizontal--direction">
          <figure class="image">
            <img :src="IcoMarihuana" alt="Marihuana" />
          </figure>

          <div class="info">
            <h3>Toma diaria de CBD</h3>
            <p>
              <DropLabel :portion="itemList.portion" /> |
              {{ timestampToDateTime(itemList.timestamp) }}
            </p>
          </div>
        </div>

        <ChevronRight />
      </li>
    </ul>
  </section>
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
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 800px) {
  .section {
    padding: 0;
  }
}
</style>
