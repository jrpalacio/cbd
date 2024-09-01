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
  padding: 0 4rem;
  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 800px) {
  .content--list {
    padding: 0;
  }
}
</style>
